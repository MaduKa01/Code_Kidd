import 'package:codekidd_app/core/routes/app_router.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/core/state/course_state.dart';
import 'package:codekidd_app/core/utils/preferences.dart';
import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';
import 'package:provider/provider.dart';

void main() async {
  final WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);
  final AppState? state = await Preferences().loadState();
  await Future<void>.delayed(const Duration(seconds: 2));
  
  runApp(
    MultiProvider(
      providers: <ListenableProvider<dynamic>>[
        ChangeNotifierProvider<AppState>(create: (final _) => state ?? AppState()),
        ChangeNotifierProvider<CourseState>(create: (final _) => CourseState()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(final BuildContext context) {
    FlutterNativeSplash.remove();
    return Selector<AppState, AppState>(
      selector: (final _, final AppState state) => state,
      shouldRebuild: (final AppState previous, final AppState next) =>
          previous.theme == next.theme && previous.user == next.user,
      builder: (final BuildContext context, final AppState state, final _) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'CodeKidd',
        theme: state.theme,
        initialRoute: AppRouter.initialRoute,
        onGenerateRoute: AppRouter(context).onGenerateRoute,
      ),
    );
  }
}
