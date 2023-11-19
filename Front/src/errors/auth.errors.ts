import AUTH_MESSAGES from "@/messages/auth.messages";

export class InvalidTokenError extends Error {
  constructor() {
    super(AUTH_MESSAGES.invalidToken);
    this.name = "InvalidTokenError";
  }
}

export class ExpiredTokenError extends Error {
  constructor() {
    super(AUTH_MESSAGES.expiredToken);
    this.name = "ExpiredTokenError";
  }
}

export class UserNotFound extends Error {
  constructor() {
    super(AUTH_MESSAGES.userNotFound);
    this.name = "UserNotFound";
  }
}
