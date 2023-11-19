import 'dart:convert';

import 'package:codekidd_app/core/state/app_state.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Preferences {
  factory Preferences() => _instance;
  Preferences._();
  static final Preferences _instance = Preferences._();
  
  Future<AppState?> loadState() async {
    final SharedPreferences pref = await SharedPreferences.getInstance();
    final Map<String, dynamic> stateJson = jsonDecode(pref.getString('state') ?? '{}');

    return stateJson.isEmpty ? null : AppState.fromJson(stateJson);
  }

  Future<void> saveState(final AppState state) async {
    final SharedPreferences pref = await SharedPreferences.getInstance();
    await pref.setString('state', jsonEncode(state.toJson()));
  }
}
