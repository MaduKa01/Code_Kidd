import 'dart:developer';

import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:codekidd_app/core/services/auth_service.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/core/utils/validator.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher_string.dart';

class RegisterForm extends StatefulWidget {
  const RegisterForm({required this.changeView, super.key});

  final VoidCallback changeView;

  @override
  State<RegisterForm> createState() => _RegisterFormState();
}

class _RegisterFormState extends State<RegisterForm> {
  final GlobalKey<FormState> _formKey = GlobalKey();
  bool agreeToTerms = false;
  bool obscure = true;

  final ValueNotifier<bool> loading = ValueNotifier<bool>(false);
  final MaskTextInputFormatter maskFormatter = MaskTextInputFormatter(
    mask: '(##) #####-####',
    filter: <String, RegExp>{'#': RegExp(r'[0-9]')},
  );

  String name = '';
  String email = '';
  String cellphone = '';
  String password = '';

  @override
  Widget build(final BuildContext context) => Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Text(
              'Seja bem-vindo(a)',
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 8),
            const Text('Insira seus dados abaixo', textAlign: TextAlign.center),
            const SizedBox(height: 12),
            TextFormField(
              keyboardType: TextInputType.name,
              decoration: const InputDecoration(
                hintText: 'Nome',
              ),
              validator: Validator.name,
              onChanged: (final String value) => name = value,
            ),
            const SizedBox(height: 12),
            TextFormField(
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                hintText: 'E-mail',
              ),
              validator: Validator.email,
              onChanged: (final String value) => email = value,
            ),
            const SizedBox(height: 12),
            TextFormField(
              inputFormatters: <TextInputFormatter>[maskFormatter],
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                hintText: 'Número do celular',
              ),
              validator: Validator.cellphone,
              onChanged: (final String value) => cellphone = value,
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
              validator: Validator.password,
              onChanged: (final String value) => password = value,
            ),
            const SizedBox(height: 12),
            TextButton(
              style: TextButton.styleFrom(padding: EdgeInsets.zero),
              onPressed: () => setState(() => agreeToTerms = !agreeToTerms),
              child: Row(
                children: <Widget>[
                  Checkbox(
                    visualDensity: VisualDensity.compact,
                    value: agreeToTerms,
                    onChanged: (final bool? value) => setState(() => agreeToTerms = value!),
                  ),
                  Expanded(
                    child: Text.rich(
                      TextSpan(
                        children: <InlineSpan>[
                          const TextSpan(text: 'Concordo com os '),
                          TextSpan(
                            text: 'termos de serviço',
                            style: const TextStyle(decoration: TextDecoration.underline, color: Colors.blue),
                            recognizer: TapGestureRecognizer()
                              ..onTap = () => launchUrlString(AuthService.termsUrl),
                          ),
                        ],
                        style: const TextStyle(color: Colors.black87, fontSize: 13),
                      ),
                      maxLines: 1,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            ValueListenableBuilder<bool>(
              valueListenable: loading,
              builder: (final _, final bool isLoading, final Widget? child) => ElevatedButton(
                onPressed: agreeToTerms
                    ? isLoading
                        ? () {}
                        : register
                    : null,
                child: isLoading ? const Center(child: CircularProgressIndicator()) : child,
              ),
              child: const Text('REGISTRAR'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const Text('Já possui uma conta?'),
                TextButton(onPressed: widget.changeView, child: const Text('Clique aqui!')),
              ],
            ),
          ],
        ),
      );

  Future<void> register() async {
    if (_formKey.currentState?.validate() ?? false) {
      try {
        loading.value = true;
        final User user = User(id: '0', name: name, email: email, cellphone: cellphone);
        final User? result = await AuthService().register(user: user, password: password);

        if (result != null) {
          if (context.mounted) {
            context.read<AppState>().user = result;
            Navigator.of(context).pushNamedAndRemoveUntil(AppRoutes.mainpage, (final _) => false);
          }
        }
      } catch (e, s) {
        log(e.toString(), name: 'REGISTER', stackTrace: s);
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
