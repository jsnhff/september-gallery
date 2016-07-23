---
title: Info
permalink: "/info/"
layout: default
---

<div class="pt1">
    <div class="col-11 mt3 mx-auto">
        <h1 class="hide">Info</h1>
        <!-- Begin MailChimp Signup Form -->
        <div class="clearfix">
            <form action="//septembergallery.us13.list-manage.com/subscribe/post?u=9541e75f42d936cad8f86d52c&amp;id=d4ed0b439e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="col-12 sm-col-7 md-col-7 lg-col-6 mx-auto">
                    <h2 class="h3 regular mb0">Subscribe to our mailing list</h2>
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

        <div class="table mx-auto parent-hover mt4">
            <div class="table-cell align-middle">
                <a title="September Gallery Instagram" href="htt://www.instagram.com">
                    <span class="icon inline-block">{% include icon-instagram.svg %}</span>
                </a>
            </div>
            <div class="table-cell align-middle">
                <a class="h3 my0 text-decoration-none navy pl1" title="September Gallery Instagram" href="http://www.instagram.com/{{ site.instagram_username }}">September Gallery on Instagram</a>
            </div>
        </div>
        <p class="h3 fit center mt3">212-876-5309</p>
        <p class="h3 fit center mt3">
            {% for exhibition in site.space %}
                {% assign a_start = exhibition.start_date | date: "%j" %}
                {% assign a_end = exhibition.end_date | date: "%j" %}
                {% if now > a_start and now < a_end %}
                    {{ assign current_exhibition = exhibition.title }}
                {% endif %}
            {% endfor %}
            <a class="text-decoration-none navy" title="Email for appointments" href="mailto:{{ site.email }}?subject=I'd like to visit {{ current_exhibition }}">Email for appointments</a>
        </p>
    </div>
</div>
