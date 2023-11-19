import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/ui/auth/auth_page.dart';
import 'package:codekidd_app/ui/course/course_lesson_page.dart';
import 'package:codekidd_app/ui/main/main_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AppRouter {
  const AppRouter(this.context);
  final BuildContext context;

  static String get initialRoute => AppRoutes.mainpage;

  Route<dynamic> onGenerateRoute(final RouteSettings settings) {
    final AppState appState = context.read<AppState>();
    if (appState.user == null) {
      return _defaultRoute(const AuthPage());
    }

    switch (settings.name) {
      case AppRoutes.login:
        return _defaultRoute(const AuthPage());
      case AppRoutes.mainpage:
        return _defaultRoute(const MainPage());
      case AppRoutes.courseLessons:
        final Course course = settings.arguments as Course;
        return _defaultRoute(CourseLessonPage(course));
      default:
        return _defaultRoute(const AuthPage());
    }
  }

  MaterialPageRoute<Object?> _defaultRoute(final Widget destination) =>
      MaterialPageRoute<Object?>(builder: (final BuildContext context) => destination);
}
