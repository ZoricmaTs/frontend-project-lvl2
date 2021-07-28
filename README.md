# Вычислитель отличий
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/ZoricmaTs/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ZoricmaTs/frontend-project-lvl2/actions)

### codeclimate status:
[![Maintainability](https://api.codeclimate.com/v1/badges/5a36a0d47c0a44869eb6/maintainability)](https://codeclimate.com/github/ZoricmaTs/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5a36a0d47c0a44869eb6/test_coverage)](https://codeclimate.com/github/ZoricmaTs/frontend-project-lvl2/test_coverage)

### Установка
1. Установите Node.js последней версии в систему глобально (Установка JavaScript).
Для получения этой версии можно использовать диспетчер пакетов ```apt```. Обновите указатель локальных пакетов с помощью следующей команды

```sudo apt update```

```sudo apt install nodejs```

Проверьте, что установка выполнена успешно, запросив у node номер версии:

```nodejs -v```

установите пакет npm с помощью apt:

```sudo apt install npm```

3. Склонируйте созданный репозиторий проекта локально.

```git clone git@github.com:ZoricmaTs/frontend-project-lvl2.git```

4. Выполнить установку зависимостей

```make install```

5. Запустить сравнение файлов

```gendiff <filepath1> <filepath2>```

### Сравнение файлов в формате json
[![asciicast](https://asciinema.org/a/GFkTsClBGo9E1Ta2uJqe7KJkm.png)](https://asciinema.org/a/GFkTsClBGo9E1Ta2uJqe7KJkm)
### Сравнение файлов в формате yaml
[![asciicast](https://asciinema.org/a/J8ZspIigeUcmm3HwXl66rUxY4.png)](https://asciinema.org/a/J8ZspIigeUcmm3HwXl66rUxY4)

### Сравнение файлов в формате yaml с выводом формата по умолчанию "stylish"
[![asciicast](https://asciinema.org/a/vbjydwbeIvsVUQkJWdePhD77H.png)](https://asciinema.org/a/vbjydwbeIvsVUQkJWdePhD77H)

### Сравнение файлов в формате yaml с выводом формата "plain"
```gendiff --format plain <filepath1> <filepath2>```
[![asciicast](https://asciinema.org/a/gpXrEMtjOiHkKTTZZ7AIn81z6.png)](https://asciinema.org/a/gpXrEMtjOiHkKTTZZ7AIn81z6)

### Сравнение файлов в формате yaml с выводом формата "json"
```gendiff --format json <filepath1> <filepath2>```
[![asciicast](https://asciinema.org/a/nJn3AqTf4qZ7s6hF2eau7i3jo.png)](https://asciinema.org/a/nJn3AqTf4qZ7s6hF2eau7i3jo)
