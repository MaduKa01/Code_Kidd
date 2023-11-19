import 'package:codekidd_app/core/model/course.dart';

class User {
  User({
    required this.id,
    required this.name,
    required this.email,
    required this.cellphone,
    this.enrolled = const <Course>[],
    this.saved = const <Course>[],
    this.points = 0,
    this.level = 0,
  });

  factory User.fromJson(final Map<String, dynamic> json) => User(
        id: json['_id'],
        name: json['name'],
        email: json['email'],
        cellphone: json['cellphone'],
        enrolled: (json['enrolledCourses'] as List<dynamic>?)
                ?.map((final dynamic e) => Course.fromJson(e))
                .toList() ??
            <Course>[],
        saved:
            (json['savedCourses'] as List<dynamic>?)?.map((final dynamic e) => Course.fromJson(e)).toList() ??
                <Course>[],
        points: json['points'] ?? 0,
        level: json['level'] ?? 0,
      );

  final String id;
  String name;
  String email;
  String cellphone;
  final List<Course> enrolled;
  final List<Course> saved;
  int points;
  int level;

  Map<String, dynamic> toJson() => <String, dynamic>{
        '_id': id,
        'name': name,
        'email': email,
        'cellphone': cellphone,
      };

  User copyWith(
    final String? id,
    final String? name,
    final String? email,
    final String? cellphone,
    final List<Course>? enrolled,
    final List<Course>? saved,
    final int? points,
    final int? level,
  ) =>
      User(
        id: id ?? this.id,
        name: name ?? this.name,
        email: email ?? this.email,
        cellphone: cellphone ?? this.cellphone,
        enrolled: enrolled ?? this.enrolled,
        saved: saved ?? this.saved,
        points: points ?? this.points,
        level: level ?? this.level,
      );
}
