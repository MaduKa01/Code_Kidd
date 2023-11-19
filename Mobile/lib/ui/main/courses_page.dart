import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/core/state/course_state.dart';
import 'package:codekidd_app/ui/widgets/course_carousel.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CoursesPage extends StatefulWidget {
  const CoursesPage({super.key});

  @override
  State<CoursesPage> createState() => _CoursesPageState();
}

class _CoursesPageState extends State<CoursesPage> {
  @override
  Widget build(final BuildContext context) => ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Card(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  Text(
                    'Lista de Cursos',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 12),
                  Consumer<CourseState>(
                    builder: (final BuildContext context, final CourseState courseProvider, final _) =>
                        CourseCarousel(courses: courseProvider.cache),
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
                    'Ganhe mais XP!',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 12),
                  Consumer<CourseState>(
                    builder: (final BuildContext context, final CourseState courseProvider, final _) =>
                        SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Table(
                        columnWidths: const <int, TableColumnWidth>{
                          0: FixedColumnWidth(220),
                          1: FixedColumnWidth(150),
                          2: FixedColumnWidth(150),
                          3: FixedColumnWidth(100),
                          4: FixedColumnWidth(140),
                        },
                        defaultVerticalAlignment: TableCellVerticalAlignment.middle,
                        children: <TableRow>[
                          TableRow(
                            decoration: const BoxDecoration(border: Border(bottom: BorderSide())),
                            children: <Widget>[
                              Text(
                                'Nome',
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                'Categoria',
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                'Nível',
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                'Aulas',
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                'Recompensa',
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(fontWeight: FontWeight.bold),
                              ),
                            ]
                                .map(
                                  (final Widget e) => Padding(
                                    padding: const EdgeInsets.fromLTRB(8, 12, 8, 12),
                                    child: e,
                                  ),
                                )
                                .toList(),
                          ),
                          ...List<TableRow>.generate(
                            courseProvider.cache.length,
                            (final int i) {
                              final Course course = courseProvider.cache[i];
                              return TableRow(
                                decoration: const BoxDecoration(border: Border(bottom: BorderSide())),
                                children: <Widget>[
                                  Text(course.title, maxLines: 4, overflow: TextOverflow.ellipsis),
                                  Text(course.category ?? '-'),
                                  Text(course.level),
                                  Text('${course.lessons.length} aulas'),
                                  Text('${course.reward} pts', textAlign: TextAlign.center),
                                ]
                                    .map(
                                      (final Widget e) => Padding(
                                        padding: const EdgeInsets.fromLTRB(8, 12, 8, 12),
                                        child: e,
                                      ),
                                    )
                                    .toList(),
                              );
                            },
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      );
}
