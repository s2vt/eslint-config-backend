# @ssvt/eslint-config-backend

---

## Overview

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 기반으로 커스터마이징 한 Backend 프로젝트용 eslint config 레포지토리입니다.

## Installation

해당 패키지와 함께
Peer dependencies에 포함된 패키지를 모두 설치해야 합니다.

설치 시 Bitbucket 접속을 위한 SSH, 혹은 Token 등이 세팅 되어있어야 합니다.

```shell
$ npm install bitbucket:s2vt/eslint-config-backend#v1.0.0

$ npm install --save-dev @typescript-eslint/eslint-plugin@5.10.2 @typescript-eslint/parser@5.10.2 eslint@8.8.0 eslint-config-airbnb-base@15.0.0 eslint-config-prettier@8.3.0 eslint-plugin-jest@26.1.0 eslint-plugin-import@2.25.4 eslint-plugin-prettier@4.0.0 prettier@2.5.1
```

## Getting Started

패키지를 모두 설치 후 사용하고자 하는 프로젝트의 eslint 설정을 변경하면 됩니다.
적용하고자 하는 플러그인만 extends 속성에 추가하면 됩니다.

### JavaScript 프로젝트

```json
{
  "extends": [
    "@ssvt/eslint-config-backend",
  ],
}
```

### TypeScript 프로젝트

```json
{
  "extends": [
    "@ssvt/eslint-config-backend",
    "@ssvt/eslint-config-backend/typescript",
  ],
}
```

### Prettier 적용

```json
{
  "extends": [
    "@ssvt/eslint-config-backend",
    "@ssvt/eslint-config-backend/prettier"
  ],
}
```
