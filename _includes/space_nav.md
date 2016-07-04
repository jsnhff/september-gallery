<div class="fixed sm-col sm-col-2 md-col-2 lg-col-2 xs-hide sm-hide sm-pr0 md-pr0 lg-pr4">
{% for exhibition in site.space %}
{% assign start = exhibition.start_date | date: "%j" %}
{% assign end = exhibition.end_date | date: "%j" %}
{% assign now = 'now' | date: "%j" %}
    {% if now > start and now < end %}
        {% assign now_count = now_count | plus: 1 %}
    {% elsif now < start %}
        {% assign after_count = after_count | plus: 1 %}
    {% elsif now > end %}
        {% assign before_count = before_count | plus: 1 %}
    {% endif %}
{% endfor %}
{% for exhibition in site.space %}
{% assign start = exhibition.start_date | date: "%j" %}
{% assign end = exhibition.end_date | date: "%j" %}
{% assign now = 'now' | date: "%j" %}
    {% if now > start and now < end %}
        {% assign counter1 = counter1 | plus: 1 %}
        {% if counter1 <= 1 %}
        <h3 class="h6 regular caps gray m0">Now</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
            <a class="text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter1 >= now_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}

{% for exhibition in site.space %}
{% assign start = exhibition.start_date | date: "%j" %}
{% assign end = exhibition.end_date | date: "%j" %}
{% assign now = 'now' | date: "%j" %}
    {% if now < start %}
        {% assign counter2 = counter2 | plus: 1 %}
        {% if counter2 <= 1 %}
        <h3 class="h6 regular caps gray">After</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
            <a class="text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter2 >= after_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}

{% for exhibition in site.space %}
{% assign start = exhibition.start_date | date: "%j" %}
{% assign end = exhibition.end_date | date: "%j" %}
{% assign now = 'now' | date: "%j" %}
    {% if now > end %}
        {% assign counter3 = counter3 | plus: 1 %}
        {% if counter3 <= 1 %}
        <h3 class="h6 regular caps gray">Before</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
            <a class="text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter3 >= before_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}
</div>

