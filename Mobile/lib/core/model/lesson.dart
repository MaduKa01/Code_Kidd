class Lesson {
  Lesson({required this.title, required this.description, required this.videoURL, required this.duration});
  factory Lesson.fromJson(final Map<String, dynamic> json) => Lesson(
        title: json['lessonTitle'],
        description: json['lessonDescription'],
        videoURL: json['videoURL'],
        duration: json['duration'],
      );

  final String title;
  final String description;
  final String videoURL;
  final String duration;

  Map<String, dynamic> toJson() => <String, dynamic>{
        'lessonTitle': title,
        'lessonDescription': description,
        'videoURL': videoURL,
        'duration': duration,
      };
}
