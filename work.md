---
title: Work
permalink: "/work/"
layout: default
---

<!-- Work navigation spacer -->
<div class="sm-col md-col-2 lg-col-2 xs-hide sm-hide mt3">
    {% include work_nav.html %}
</div>

<!-- Work list -->
<ul class="list-reset col-11 sm-col sm-col-12 md-col-10 lg-col-10 mt3 mx-auto">
    <h1 class="hide">Work</h1>
    {% for artist in site.work %}
        {% if artist.is_always == true %}
            {% assign page_counter1 = page_counter1 | plus: 1 %}
            {% if page_counter1 <= 1 %}
                <h3 class="h6 regular caps gray mt0 mb2 md-pl1 lg-pl1">Always</h3>
            {% endif %}
        {% include artist.html %}
        {% endif %}
    {% endfor %}
    {% for artist in site.work %}
        {% if artist.is_always == false %}
            {% assign page_counter2 = page_counter2 | plus: 1 %}
            {% if page_counter2 <= 1 %}
                <h3 class="h6 regular caps gray my2 md-pl1 lg-pl1">Sometimes</h3>
            {% endif %}
        {% include artist.html %}
        {% endif %}
    {% endfor %}
</ul>
