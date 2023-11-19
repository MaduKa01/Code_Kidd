import 'package:codekidd_app/constant.dart';
import 'package:codekidd_app/core/exceptions/app_exception.dart';
import 'package:codekidd_app/core/model/user.dart';
import 'package:codekidd_app/core/utils/http_util.dart';

class UserService {
  factory UserService() => _instance;
  const UserService._();
  static const UserService _instance = UserService._();

  static const String _userUrl = '$baseUrl/users';
  // static const String _checkTokenUrl = '$_userUrl/checktoken';
  // static const String _userDetailsUrl = '$_userUrl/details/';

  Future<User> update(final User user) async {
    final Map<String, dynamic> result = await HttpUtil.put(
      Uri.parse('$_userUrl/${user.id}'),
      user.toJson(),
    );

    if (result['httpStatus'] as int < 400) return User.fromJson(result);
    throw AppException(result['error']);
  }
}
