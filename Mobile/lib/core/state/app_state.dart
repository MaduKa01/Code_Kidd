import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/utils/preferences.dart';
import 'package:flutter/material.dart';

class AppState with ChangeNotifier {
  factory AppState({final User? user, final ThemeData? theme}) => AppState._(user, theme ?? _defaultTheme);
  AppState._(this._user, this._theme);
  factory AppState.fromJson(final Map<String, dynamic> json) => AppState(
        user: json['user'] != null ? User.fromJson(json['user']) : null,
      );

  Map<String, dynamic> toJson() => <String, dynamic>{
        'theme': 0,
        'user': user?.toJson(),
      };

  User? _user;
  User? get user => _user;
  set user(final User? value) {
    _user = value;
    notifyListeners();
    Preferences().saveState(this);
  }

  ThemeData _theme;
  ThemeData get theme => _theme;
  set theme(final ThemeData value) {
    _theme = value;
    notifyListeners();
    Preferences().saveState(this);
  }

  static ThemeData get _defaultTheme => ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
        scaffoldBackgroundColor: Colors.grey.shade300,
        cardTheme: const CardTheme(
          elevation: 8,
          color: Colors.white,
          surfaceTintColor: Colors.white,
          shadowColor: Colors.black,
        ),
        textButtonTheme: TextButtonThemeData(
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.all(16),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white,
            backgroundColor: Colors.deepPurple,
            padding: const EdgeInsets.all(16),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        ),
        inputDecorationTheme: const InputDecorationTheme(
          border: OutlineInputBorder(),
        ),
      );
}
