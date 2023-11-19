import 'package:codekidd_app/constant.dart';
import 'package:codekidd_app/core/exceptions/app_exception.dart';
import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/core/utils/http_util.dart';

class CourseService {
  factory CourseService() => _instance;
  const CourseService._();
  static const CourseService _instance = CourseService._();

  static const String _courseUrl = '$baseUrl/courses';

  Future<List<Course>> getAll() async {
    final Map<String, dynamic> result = await HttpUtil.get(Uri.parse(_courseUrl));

    if (result['httpStatus'] as int < 400) {
      final List<Map<String, dynamic>> list = (result['data'] as List<dynamic>).cast<Map<String, dynamic>>();
      list.retainWhere((final Map<String, dynamic> c) =>
          c['title'] != null && c['lessons'] != null && (c['lessons'] as List<dynamic>).isNotEmpty,);
      return list.map((final dynamic c) => Course.fromJson(c)).toList();
    }
    throw AppException(result['error']);
  }
}
