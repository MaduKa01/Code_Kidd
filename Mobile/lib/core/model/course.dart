import 'package:codekidd_app/core/model/lesson.dart';

class Course {
  const Course({
    required this.title,
    required this.lessons,
    this.description = '',
    this.banner,
    this.rating,
    this.category,
    this.level = '0',
    this.reward = '',
  });

  factory Course.fromJson(final Map<String, dynamic> json) => Course(
        title: json['title'],
        lessons: (json['lessons'] as List<dynamic>).map((final dynamic e) => Lesson.fromJson(e)).toList(),
        description: json['description'],
        banner: json['banner'],
        rating: json['rating'],
        category: json['category'],
        level: json['level'],
        reward: json['reward'],
      );

  final String title;
  final String description;
  final String? banner;
  final double? rating;
  final String? category;
  final String level;
  final String reward;
  final List<Lesson> lessons;

  Map<String, dynamic> toJson() => <String, dynamic>{
        'title': title,
        'description': description,
        'banner': banner,
        'rating': rating,
        'category': category,
        'level': level,
        'reward': reward,
        'lessons': lessons.map((final Lesson e) => e.toJson()).toList(),
      };

  Course copyWith(
    final String? title,
    final String? description,
    final String? banner,
    final double? rating,
    final String? category,
    final String? level,
    final String? reward,
    final List<Lesson>? lessons,
  ) =>
      Course(
        title: title ?? this.title,
        description: description ?? this.description,
        banner: banner ?? this.banner,
        rating: rating ?? this.rating,
        category: category ?? this.category,
        level: level ?? this.level,
        reward: reward ?? this.reward,
        lessons: lessons ?? this.lessons,
      );
}
