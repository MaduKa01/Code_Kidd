import 'package:codekidd_app/constant.dart';
import 'package:codekidd_app/core/exceptions/auth_exception.dart';
import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/utils/http_util.dart';

class AuthService {
  factory AuthService() => _instance;
  const AuthService._();
  static const AuthService _instance = AuthService._();

  static const String termsUrl = 'https://talk2buy.com.br/termsandconditions';

  static const String _registerUrl = '$baseUrl/users';
  static const String _loginUrl = '$_registerUrl/login';
  // static const String _recoverPasswordUrl = '$_loginUrl/recoverpassword';
  // static const String _changePasswordUrl = '$_loginUrl/changepassword';

  Future<User?> register({required final User user, required final String password}) async {
    final Map<String, dynamic> result = await HttpUtil.post(
      Uri.parse(_registerUrl),
      <String, String>{...user.toJson(), 'password': password},
    );

    if (result['httpStatus'] as int < 400) return User.fromJson(result['data']);
    throw AuthException(result['error']);
  }

  Future<User?> login(final String email, final String password) async {
    final Map<String, dynamic> result =
        await HttpUtil.post(Uri.parse(_loginUrl), <String, String>{'email': email, 'password': password});

    if (result['httpStatus'] as int < 400) return User.fromJson(result['data']);
    throw AuthException(result['error']);
  }

  // Future<void> recover() {}
  // Future<void> changePassword(String newPassword) {}
}
