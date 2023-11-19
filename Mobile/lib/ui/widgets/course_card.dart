import 'package:codekidd_app/core/assets/app_images.dart';
import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:flutter/material.dart';

class CourseCard extends StatelessWidget {
  const CourseCard({required this.course, super.key});

  final Course course;

  @override
  Widget build(final BuildContext context) => Center(
        child: SizedBox(
          width: 280,
          child: Card(
            elevation: 2,
            color: Colors.grey.shade200,
            child: InkWell(
              onTap: () => Navigator.of(context).pushNamed(AppRoutes.courseLessons, arguments: course),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: <Widget>[
                    Expanded(
                      flex: 4,
                      child: course.banner != null
                          ? Image.network(
                              course.banner!,
                              errorBuilder: (final _, final __, final ___) => Image.asset(
                                AppImages.noCourseImage,
                                fit: BoxFit.cover,
                              ),
                              fit: BoxFit.cover,
                            )
                          : Image.asset(
                              AppImages.noCourseImage,
                              fit: BoxFit.cover,
                            ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      course.title,
                      maxLines: 2,
                      style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 8),
                    Expanded(
                      flex: 3,
                      child: Text(
                        course.description,
                        maxLines: 4,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        Text(
                          '${course.rating}',
                        ),
                        const SizedBox(width: 4),
                        const Icon(Icons.star, color: Colors.yellow),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      );
}
