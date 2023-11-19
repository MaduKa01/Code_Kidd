import 'package:carousel_slider/carousel_slider.dart';
import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/ui/widgets/course_card.dart';
import 'package:flutter/material.dart';

class CourseCarousel extends StatefulWidget {
  const CourseCarousel({
    required this.courses,
    this.autoplay = true,
    this.showDots = true,
    super.key,
  });

  final List<Course> courses;
  final bool autoplay;

  /// Show dot counter below the carousel. Only works if number of courses are below 8
  final bool showDots;

  @override
  State<CourseCarousel> createState() => CourseCarouselState();
}

class CourseCarouselState extends State<CourseCarousel> {
  int currentIndex = 0;

  @override
  Widget build(final BuildContext context) => Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          CarouselSlider(
            options: CarouselOptions(
              height: 400.0,
              autoPlay: widget.autoplay,
              autoPlayAnimationDuration: const Duration(milliseconds: 1600),
              autoPlayCurve: Curves.ease,
              viewportFraction: 1.0,
              onPageChanged: (final int i, final _) => setState(() => currentIndex = i),
            ),
            items: widget.courses.map((final Course c) => CourseCard(course: c)).toList(),
          ),
          if (widget.showDots && widget.courses.length < 8)
            ...<Widget>[
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List<AnimatedContainer>.generate(
                  widget.courses.length,
                  (final int index) {
                    final double size = index == currentIndex ? 16 : 12;
                    return AnimatedContainer(
                      height: size,
                      width: size,
                      margin: EdgeInsets.only(right: index == widget.courses.length ? 0 : 8),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: index == currentIndex ? Colors.deepPurple : Colors.grey,
                      ),
                      duration: const Duration(milliseconds: 400),
                    );
                  },
                ),
              ),
            ],
        ],
      );
}
