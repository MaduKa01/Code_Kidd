import 'package:codekidd_app/core/assets/app_images.dart';
import 'package:codekidd_app/core/routes/app_routes.dart';
import 'package:codekidd_app/core/services/course_service.dart';
import 'package:codekidd_app/core/state/app_state.dart';
import 'package:codekidd_app/core/state/course_state.dart';
import 'package:codekidd_app/ui/main/courses_page.dart';
import 'package:codekidd_app/ui/main/dashboard_page.dart';
import 'package:codekidd_app/ui/main/profile_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> with SingleTickerProviderStateMixin {
  late TabController controller;

  @override
  void initState() {
    super.initState();
    controller = TabController(length: 3, vsync: this);

    loadCourses();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  Future<void> loadCourses() async {
    context.read<CourseState>().cache = await CourseService().getAll();
  }

  @override
  Widget build(final BuildContext context) => Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          leading: Image.asset(AppImages.logoSmall, fit: BoxFit.cover),
          title: AnimatedBuilder(
            animation: controller,
            builder: (final BuildContext context, final _) => Text(getTitle()),
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
          child: TabBarView(
            controller: controller,
            physics: const NeverScrollableScrollPhysics(),
            children: const <Widget>[
              DashboardPage(),
              CoursesPage(),
              ProfilePage(),
            ],
          ),
        ),
        bottomNavigationBar: AnimatedBuilder(
          animation: controller,
          builder: (final BuildContext context, final _) => BottomNavigationBar(
            currentIndex: controller.index,
            onTap: (final int value) => controller.animateTo(value),
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.dashboard),
                label: 'Dashboard',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.book),
                label: 'Cursos',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.account_circle),
                label: 'Perfil',
              ),
            ],
          ),
        ),
      );

  String getTitle() {
    switch (controller.index) {
      case 0:
        return 'Dashboard';
      case 1:
        return 'Cursos';
      case 2:
        return 'Perfil';
      default:
        return '';
    }
  }

  void logout() {
    context.read<AppState>().user = null;
    Navigator.of(context).pushNamedAndRemoveUntil(AppRoutes.login, (final _) => false);
  }
}
