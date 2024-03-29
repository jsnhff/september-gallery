---
title: Space
permalink: "/space/"
layout: default
---

<!-- Space navigation spacer -->
<div class="sm-col md-col-2 lg-col-2 xs-hide sm-hide mt3">
    {% include space_nav.md %}
    {% include scroll_to_top.html %}
</div>

<!-- Sort posts in reverse -->
{% assign exhibitions = site.space | sort:"date" | reverse %}

<!-- %s equals unix time, the universal time comparison format -->
{% assign now = 'now' | date: "%s" %}

<ul class="list-reset col-11 sm-col sm-col-12 md-col-10 lg-col-10 mt3 mx-auto">
    <h1 class="hide">Space</h1>
    {% for exhibition in exhibitions %}
        {% assign a_start = exhibition.start_date | date: "%s" %}
        {% assign a_end = exhibition.end_date | date: "%s" %}
            {% if now >= a_start and now <= a_end %}
                {% assign page_counter1 = page_counter1 | plus: 1 %}
                {% if page_counter1 <= 1 %}
                <h3 class="h6 regular caps gray my2 mb2 md-pl1 lg-pl1">Now</h3>
                {% endif %}
                {% include exhibition.html %}
            {% endif %}
    {% endfor %}
    {% for exhibition in exhibitions %}
        {% assign b_start = exhibition.start_date | date: "%s" %}
            {% if now < b_start %}
                {% assign page_counter2 = page_counter2 | plus: 1 %}
                {% if page_counter2 <= 1 %}
                <h3 class="h6 regular caps gray my2 md-pl1 lg-pl1">After</h3>
                {% endif %}
                {% include exhibition.html %}
            {% endif %}
    {% endfor %}
    {% for exhibition in exhibitions %}
        {% assign c_end = exhibition.end_date | date: "%s" %}
            {% if now > c_end %}
                {% assign page_counter3 = page_counter3 | plus: 1 %}
                {% if page_counter3 <= 1 %}
                <h3 class="h6 regular caps gray my2 md-pl1 lg-pl1">Before</h3>
                {% endif %}
                {% include exhibition.html %}
            {% endif %}
    {% endfor %}
</ul>
