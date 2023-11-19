import 'package:codekidd_app/core/model/course.dart';
import 'package:flutter/material.dart';

class CourseState with ChangeNotifier {
  List<Course> _cache = <Course>[];
  List<Course> get cache => _cache;
  set cache(final List<Course> value) {
    _cache = value;
    notifyListeners();
  }
}
