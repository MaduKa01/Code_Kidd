import 'package:codekidd_app/core/assets/app_images.dart';
import 'package:codekidd_app/core/state/course_state.dart';
import 'package:codekidd_app/ui/widgets/course_carousel.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({super.key});

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> with AutomaticKeepAliveClientMixin {
  @override
  Widget build(final BuildContext context) {
    super.build(context);
    return ListView(
      padding: const EdgeInsets.all(16),
      children: <Widget>[
        Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: <Widget>[
                const Text(
                  'Aprenda tecnologia de forma divertida e prática, com aulas adaptadas à idade e nível de habilidade, cobrindo programação, robótica, design e muito mais!',
                  style: TextStyle(fontSize: 16),
                ),
                const SizedBox(height: 20),
                Image.asset(AppImages.robot),
              ],
            ),
          ),
        ),
        const SizedBox(height: 20),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Text(
                  'Cursos Populares',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                Consumer<CourseState>(
                  builder: (final BuildContext context, final CourseState courseProvider, final _) =>
                      CourseCarousel(courses: courseProvider.cache.take(8).toList()),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 20),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Text(
                  'Cursos Recentes',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                Consumer<CourseState>(
                  builder: (final BuildContext context, final CourseState courseProvider, final _) =>
                      CourseCarousel(courses: courseProvider.cache.take(8).toList()),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  @override
  bool get wantKeepAlive => true;
}
