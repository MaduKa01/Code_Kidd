import 'dart:convert';
import 'dart:developer';
import 'dart:io';

import 'package:http/http.dart' as http;

abstract class HttpUtil {
  static String? token;

  static Map<String, String> get headers {
    final Map<String, String> headers = <String, String>{
      HttpHeaders.contentTypeHeader: 'application/json',
    };

    if (token != null) headers[HttpHeaders.authorizationHeader] = 'Bearer $token';

    return headers;
  }

  static Future<Map<String, dynamic>> get(final Uri url) async =>
      parseResponse(await http.get(url, headers: headers));

  static Future<Map<String, dynamic>> post(final Uri url, [final Object? body]) async =>
      parseResponse(await http.post(url, body: jsonEncode(body), headers: headers));

  static Future<Map<String, dynamic>> put(final Uri url, [final Object? body]) async =>
      parseResponse(await http.put(url, body: jsonEncode(body), headers: headers));

  static Future<Map<String, dynamic>> delete(final Uri url) async =>
      parseResponse(await http.delete(url, headers: headers));

  static Map<String, dynamic> parseResponse(final http.Response response) {
    try {
      dynamic json = jsonDecode(response.body);
      if (json is Map<String, dynamic>) {
        json['httpStatus'] = response.statusCode;
      } else {
        json = <String, dynamic>{'data': json, 'httpStatus': response.statusCode};
      }
      return json;
    } catch (e, s) {
      log(e.toString(), name: 'PARSE RESPONSE', stackTrace: s);
      return <String, dynamic>{'httpStatus': response.statusCode, 'error': e.toString()};
    }
  }
}
