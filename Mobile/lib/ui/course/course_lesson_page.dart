import 'package:codekidd_app/core/model/course.dart';
import 'package:codekidd_app/core/model/lesson.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CourseLessonPage extends StatefulWidget {
  const CourseLessonPage(this.course, {super.key});

  final Course course;

  @override
  State<CourseLessonPage> createState() => _CourseLessonPageState();
}

class _CourseLessonPageState extends State<CourseLessonPage> {
  int currentIndex = 0;
  bool concluded = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(final BuildContext context) => Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          title: Text(
            widget.course.title,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          actions: <Widget>[
            IconButton(
              onPressed: logout,
              icon: const Icon(Icons.logout),
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
            ),
          ],
        ),
        body: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: <Widget>[
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: AspectRatio(
                    aspectRatio: 16 / 10,
                    child: Container(
                      height: 400,
                      color: Colors.blue,
                      child: Text(widget.course.lessons[currentIndex].videoURL),
                    ),
                  ),
                ),
              ),
              if (!concluded) ...<Widget>[
                const SizedBox(height: 8),
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: <Widget>[
                        Text(
                          '${currentIndex + 1}. ${widget.course.lessons[currentIndex].title}',
                          style:
                              Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                        ),
                        Text(widget.course.description),
                      ],
                    ),
                  ),
                ),
              ],
              const SizedBox(height: 8),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: <Widget>[
                      Text(
                        'Sobre este curso',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                      ),
                      Row(
                        children: <Widget>[
                          Icon(
                            Icons.insert_chart_rounded,
                            color: getColor(),
                          ),
                          const SizedBox(width: 16),
                          Text(widget.course.level),
                          const SizedBox(width: 16),
                          Text('${widget.course.reward}pts'),
                        ],
                      ),
                      Text(widget.course.description),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 8),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: <Widget>[
                      Text(
                        'Aulas',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                      ),
                      ...List<Widget>.generate(
                        widget.course.lessons.length,
                        (final int index) {
                          final Lesson lesson = widget.course.lessons[index];
                          return Container(
                            decoration: const BoxDecoration(
                              border: Border(bottom: BorderSide()),
                            ),
                            child: ListTile(
                              contentPadding: const EdgeInsets.only(right: 12),
                              title: Text('${index + 1}. ${lesson.title}'),
                              trailing: concluded || index < currentIndex
                                  ? const Icon(Icons.check_circle, color: Colors.green, size: 16)
                                  : index == currentIndex
                                      ? const Icon(Icons.circle_outlined, size: 16)
                                      : null,
                              onTap: () => setState(() => currentIndex = index),
                            ),
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
        bottomNavigationBar: Builder(
          builder: (final BuildContext context) => ElevatedButton(
            style: ElevatedButton.styleFrom(
              shape: const RoundedRectangleBorder(),
            ),
            onPressed:
                currentIndex < widget.course.lessons.length - 1 ? nextLesson : () => finishCourse(context),
            child: Text(currentIndex < widget.course.lessons.length - 1 ? 'Próxima aula' : 'Finalizar curso'),
          ),
        ),
      );

  void nextLesson() => setState(() => currentIndex += 1);
  void finishCourse(final BuildContext context) {
    setState(() => concluded = true);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Parabéns! Curso concluído com sucesso!'),
        backgroundColor: Colors.green,
      ),
    );
  }

  Color getColor() {
    final String level = widget.course.level.toLowerCase();
    final int levelIndex = level.contains('iniciante')
        ? 0
        : level.contains('intermed')
            ? 1
            : 2;

    switch (levelIndex) {
      case 0:
        return Colors.green;
      case 1:
        return Colors.yellow;
      case 2:
        return Colors.red;
      default:
        return Colors.green;
    }
  }

  void logout() {
    context.read<AppState>().user = null;
    Navigator.of(context).pushNamedAndRemoveUntil(AppRoutes.login, (final _) => false);
  }
}
