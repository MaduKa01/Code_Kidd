import 'dart:developer';

import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/services/user_service.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/core/utils/validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';
import 'package:provider/provider.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final GlobalKey<FormState> _formKey = GlobalKey();
  final MaskTextInputFormatter maskFormatter = MaskTextInputFormatter(
    mask: '(##) #####-####',
    filter: <String, RegExp>{'#': RegExp(r'[0-9]')},
  );

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(final BuildContext context) => Selector<AppState, User>(
        selector: (final _, final AppState state) => state.user!,
        builder: (final BuildContext context, final User user, final _) {
          final List<String> userSplit = user.name.split(' ');
          String userInitials = user.name[0] + user.name[1];
          if (userSplit.length > 1) {
            userInitials = userSplit.first.substring(0, 1) + userSplit[1].substring(0, 1);
          }

          return ListView(
            padding: const EdgeInsets.all(8),
            children: <Widget>[
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: <Widget>[
                      CircleAvatar(radius: 36, child: Text(userInitials)),
                      const SizedBox(width: 16),
                      Expanded(child: Text(user.name)),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Card(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 28),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: <Widget>[
                        TextFormField(
                          initialValue: user.name,
                          keyboardType: TextInputType.name,
                          decoration: const InputDecoration(
                            labelText: 'Nome',
                            border: UnderlineInputBorder(),
                          ),
                          validator: Validator.name,
                          onChanged: (final String value) => user.name = value,
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          initialValue: user.email,
                          keyboardType: TextInputType.emailAddress,
                          decoration: const InputDecoration(
                            labelText: 'E-mail',
                            border: UnderlineInputBorder(),
                          ),
                          validator: Validator.email,
                          onChanged: (final String value) => user.email = value,
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          initialValue: user.cellphone,
                          inputFormatters: <TextInputFormatter>[maskFormatter],
                          keyboardType: TextInputType.number,
                          decoration: const InputDecoration(
                            labelText: 'Número do celular',
                            border: UnderlineInputBorder(),
                          ),
                          validator: Validator.cellphone,
                          onChanged: (final String value) => user.cellphone = value,
                        ),
                        const SizedBox(height: 60),
                        ElevatedButton(onPressed: () => save(user), child: const Text('ATUALIZAR')),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          );
        },
      );

  Future<void> save(final User user) async {
    if (_formKey.currentState?.validate() ?? false) {
      try {
        final User result = await UserService().update(user);
        if (context.mounted) {
          context.read<AppState>().user = result;
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Atualizado com sucesso!'),
              backgroundColor: Colors.green,
            ),
          );
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
      }
    }
  }
}
