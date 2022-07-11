---
title: Info
permalink: "/info/"
layout: default
---

<div class="pt1">
    <div class="col-12 my3 center">
        <div id="js_streetview" class="relative bg-silver" style="z-index:-1;">
        <!--
        <div class="streetview">
            <img class="" src="https://maps.googleapis.com/maps/api/streetview?size=1000x400&location=42.3949987,-73.6979503&heading=228&pitch=4.50&fov=70&key=AIzaSyCVMendGJiHUon5HW7c35eFf81MU_gAUrI" title="September Gallery is here.">
        </div>
        -->
    </div>
</div>
<div class="clearfix">
    <div class="sm-col sm-col-6 md-col-7 lg-col-8 pr0 sm-pr2 md-pr3 lg-pr3">
        <p class="prose h3 mt2">{{ site.writing | newline_to_br }}</p>
    </div>
    <div class="sm-col sm-col-6 md-col-5 lg-col-4 pl0 sm-pl1 md-pl2 lg-pl2">
        <h2 class="mt2">Hours</h2>
        {% if site.is_closed == true %}
        <p class="h3">
            {{ site.why_youre_closed }}
        </p>
        {% else %}
        <p class="h3">
            {{ site.gallery_hours }}
        </p>
        {% endif %}
        <p class="h3">
            <a class="text-decoration-none navy" title="Email for appointments" href="mailto:{{ site.email }}?subject=I'd like to visit {{ current_exhibition }}">Email for appointments</a>
        </p>
        <h2 class="mt3 mb0">Info</h2>
        <!-- Begin MailChimp Signup Form -->
        <div class="clearfix">
            <form action="//septembergallery.us13.list-manage.com/subscribe/post?u=9541e75f42d936cad8f86d52c&amp;id=d4ed0b439e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="">
                    <h2 class="h3 regular mb0">Be on our mailing list</h2>
                    <div class="h6 right"><span class="">*</span> indicates required</div>
                    <div class="mt2">
                        <label for="mce-EMAIL">Email Address  <span class="">*</span>
                        </label>
                        <input type="email" value="" name="EMAIL" class="required input" id="mce-EMAIL">
                    </div>
                    <div class="">
                        <label for="mce-FNAME">First Name </label>  <span class="">*</span>
                        <input type="text" value="" name="FNAME" class="required input" id="mce-FNAME">
                    </div>
                    <div class="">
                        <label for="mce-LNAME">Last Name </label>  <span class="">*</span>
                        <input type="text" value="" name="LNAME" class="required input" id="mce-LNAME">
                    </div>
                    <div id="" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9541e75f42d936cad8f86d52c_d4ed0b439e" tabindex="-1" value=""></div>
                    <input type="submit" value="Subscribe" name="subscribe" id="" class="btn rounded white regular bg-navy">
                </div>
            </form>
        </div>
        <!--End mc_embed_signup-->

        <!-- Assign exhibition title for email subject -->
        {% assign now = 'now' | date: "%j" %}
        {% for exhibition in site.space %}
            {% assign a_start = exhibition.start_date | date: "%j" %}
            {% assign a_end = exhibition.end_date | date: "%j" %}
            {% if now >= a_start and now <= a_end %}
                {% assign current_exhibition = exhibition.title %}
            {% endif %}
        {% endfor %}
        <div class="xs-hide">
            <div class="table parent-hover mt3">
                <div class="table-cell align-middle">
                    <a title="September Instagram" href="htt://www.instagram.com/{{ site.instagram_username }}">
                        <span class="icon inline-block">{% include icon-instagram.svg %}</span>
                    </a>
                </div>
                <div class="table-cell align-middle">
                    <a class="h3 my0 text-decoration-none navy pl1" title="September Instagram" href="http://www.instagram.com/{{ site.instagram_username }}">September on Instagram</a>
                </div>
            </div>
        </div>
        <div class="sm-hide md-hide lg-hide center">
            <!-- Instagram link -->
            <div class="table parent-hover mt4 mx-auto">
                <div class="table-cell align-middle">
                    <a title="September Gallery Instagram" href="htt://www.instagram.com/{{ site.instagram_username }}">
                        <span class="icon inline-block">{% include icon-instagram.svg %}</span>
                    </a>
                </div>
                <div class="table-cell align-middle">
                    <a class="h3 my0 text-decoration-none navy pl1" title="September Instagram" href="http://www.instagram.com/{{ site.instagram_username }}">September on Instagram</a>
                </div>
            </div>
            <p class="h3 mt3">
                {{ site.gallery_hours }}
            </p>
            <p class="h3 mt3">
                <a class="text-decoration-none navy" title="Email for appointments" href="mailto:{{ site.email }}?subject=I'd like to visit {{ current_exhibition }}">Email for appointments</a>
            </p>
        </div>

    </div>
</div>
