<div class="xs-hide sm-hide">

<!-- Sort posts in reverse -->
{% assign exhibitions = site.space | sort:"date" | reverse %}

<!-- %s equals unix time, the universal time comparison format -->
{% assign now = 'now' | date: "%s" %}

{% for exhibition in exhibitions %}
    {% assign start = exhibition.start_date | date: "%s" %}
    {% assign end = exhibition.end_date | date: "%s" %}
    {% if now >= start and now <= end %}
        {% assign now_count = now_count | plus: 1 %}
    {% elsif now < start %}
        {% assign after_count = after_count | plus: 1 %}
    {% elsif now > end %}
        {% assign before_count = before_count | plus: 1 %}
    {% endif %}
{% endfor %}
{% for exhibition in exhibitions %}
    {% assign start = exhibition.start_date | date: "%s" %}
    {% assign end = exhibition.end_date | date: "%s" %}
    {% if now >= start and now <= end %}
        {% assign counter1 = counter1 | plus: 1 %}
        {% if counter1 <= 1 %}
        <h3 class="h6 regular caps gray mt2">Now</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
                <a class="bold text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter1 >= now_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}

{% for exhibition in exhibitions %}
    {% assign start = exhibition.start_date | date: "%s" %}
    {% assign end = exhibition.end_date | date: "%s" %}
    {% if now < start %}
        {% assign counter2 = counter2 | plus: 1 %}
        {% if counter2 <= 1 %}
        <h3 class="h6 regular caps gray mt2">After</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
                <a class="bold text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter2 >= after_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}

{% for exhibition in exhibitions %}
    {% assign start = exhibition.start_date | date: "%s" %}
    {% assign end = exhibition.end_date | date: "%s" %}
    {% if now > end %}
        {% assign counter3 = counter3 | plus: 1 %}
        {% if counter3 <= 1 %}
        <h3 class="h6 regular caps gray mt2">Before</h3>
        <ul class="list-reset mt1">
        {% endif %}
            <li>
                <a class="bold text-decoration-none black" href="{{ exhibition.title | url_encode | downcase | remove: '+' | prepend: '#' }}" title="{{ exhibition.title }}">{{ exhibition.title }}</a>
            </li>
        {% if counter3 >= before_count %}
        </ul>
        {% endif %}
    {% endif %}
{% endfor %}
</div>

