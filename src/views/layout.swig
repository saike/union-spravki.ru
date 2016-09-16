<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xml:lang="ru"
      lang="ru">
<head>
  <meta charset="utf-8" />
  <title>Все медицинские справки за один день! {% block title %}{% endblock %}</title>
  <link rel="icon" type="image/png" href="favicon.png" />
  <!-- load css libs -->
  <link rel="stylesheet" href="libs/bootstrap/dist/css/bootstrap.css">

</head>
<body>

{% include 'tools/header.swig' %}

{% include 'tools/navigation.swig' %}

{#<header>#}
  {#<h1>{% block title %}{% endblock %}</h1>#}
  {#{% block header %}{% endblock %}#}
  {#<nav>#}
    {#<ul>#}
      {#<li><a href="/">Home Page</a></li>#}
      {#<li><a href="/people">People</a></li>#}
    {#</ul>#}
  {#</nav>#}
{#</header>#}

<section role="main">
  {% block body %}{% endblock %}
</section>

</body>
</html>