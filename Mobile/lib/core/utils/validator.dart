abstract class Validator {
  static String? require(final String? input) {
    if ((input ?? '').isEmpty) return 'Este campo é obrigatório';
    return null;
  }

  static String? email(String? input) {
    input ??= '';
    input = input.trim();

    final String? requireTest = require(input);
    if (requireTest != null) return requireTest;
    if (!input.contains('@') || input.length < 5) return 'E-mail inválido';
    return null;
  }

  static String? name(String? input) {
    input ??= '';
    input = input.trim();

    final String? requireTest = require(input);
    if (requireTest != null) return requireTest;
    if (input.length < 3) return 'Nome inválido';
    return null;
  }

  static String? cellphone(String? input) {
    input ??= '';
    input = input.trim();

    final String? requireTest = require(input);
    if (requireTest != null) return requireTest;

    input = input.replaceAll(RegExp(r'\D'), '');

    if (input.length < 11) return 'Número de celular inválido';
    
    return null;
  }

  static String? password(String? input) {
    input ??= '';

    final String? requireTest = require(input);
    if (requireTest != null) return requireTest;
    if (input.length < 6) return 'Senha deve ter no mínimo 6 caracteres';
    return null;
  }
}
