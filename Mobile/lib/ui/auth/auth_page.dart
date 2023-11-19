import 'package:codekidd_app/core/assets/app_images.dart';
import 'package:codekidd_app/ui/auth/login_form.dart';
import 'package:codekidd_app/ui/auth/register_form.dart';
import 'package:flutter/material.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  ValueNotifier<bool> loginView = ValueNotifier(true);

  void changeToRegisterView() => loginView.value = false;
  void changeToLoginView() => loginView.value = true;

  @override
  Widget build(final BuildContext context) => Scaffold(
        body: SafeArea(
          minimum: const EdgeInsets.fromLTRB(0, 100, 0, 40),
          child: Center(
            child: ListView(
              shrinkWrap: true,
              clipBehavior: Clip.none,
              padding: EdgeInsets.zero,
              children: <Widget>[
                Stack(
                  children: <Widget>[
                    Card(
                      margin: const EdgeInsets.all(16),
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(20, 70, 20, 30),
                        child: ValueListenableBuilder<bool>(
                          valueListenable: loginView,
                          builder: (final _, final bool showLogin, final __) => AnimatedCrossFade(
                            firstChild: LoginForm(changeView: changeToRegisterView),
                            secondChild: RegisterForm(changeView: changeToLoginView),
                            crossFadeState: showLogin ? CrossFadeState.showFirst : CrossFadeState.showSecond,
                            duration: const Duration(milliseconds: 500),
                          ),
                        ),
                      ),
                    ),
                    Center(
                      heightFactor: 0,
                      child: Card(
                        child: Container(
                          padding: const EdgeInsets.all(20),
                          child: Image.asset(AppImages.logoPrimary, width: 240),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      );
}
