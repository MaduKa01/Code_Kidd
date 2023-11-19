import 'dart:developer';

import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:codekidd_app/core/services/auth_service.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/core/utils/validator.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class LoginForm extends StatefulWidget {
  const LoginForm({required this.changeView, super.key});

  final VoidCallback changeView;

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final GlobalKey<FormState> _formKey = GlobalKey();

  final ValueNotifier<bool> loading = ValueNotifier<bool>(false);

  String email = '';
  String password = '';
  bool obscure = true;

  @override
  Widget build(final BuildContext context) => Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            TextFormField(
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                hintText: 'E-mail',
              ),
              validator: Validator.require,
              onChanged: (final String value) => email = value,
            ),
            const SizedBox(height: 12),
            TextFormField(
              keyboardType: TextInputType.visiblePassword,
              obscureText: obscure,
              decoration: InputDecoration(
                hintText: 'Senha',
                suffixIcon: IconButton(
                  onPressed: () => setState(() => obscure = !obscure),
                  icon: Icon(obscure ? Icons.visibility : Icons.visibility_off),
                ),
              ),
              validator: Validator.require,
              onChanged: (final String value) => password = value,
            ),
            const SizedBox(height: 20),
            ValueListenableBuilder<bool>(
              valueListenable: loading,
              builder: (final _, final bool isLoading, final Widget? child) => ElevatedButton(
                onPressed: isLoading ? () {} : login,
                child: isLoading ? const Center(child: CircularProgressIndicator()) : child,
              ),
              child: const Text('FAZER LOGIN'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const Text('Não possui uma conta?'),
                TextButton(
                  onPressed: widget.changeView,
                  child: const Text('Clique aqui!'),
                ),
              ],
            ),
          ],
        ),
      );

  Future<void> login() async {
    if (_formKey.currentState?.validate() ?? false) {
      try {
        loading.value = true;
        final User? result = await AuthService().login(email, password);
        if (result != null) {
          if (context.mounted) {
            context.read<AppState>().user = result;
            Navigator.of(context).pushNamedAndRemoveUntil(AppRoutes.mainpage, (final _) => false);
          }
        }
      } catch (e, s) {
        log(e.toString(), name: 'Login', stackTrace: s);
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(e.toString()),
              backgroundColor: Colors.red,
            ),
          );
        }
      } finally {
        loading.value = false;
      }
    }
  }
}
