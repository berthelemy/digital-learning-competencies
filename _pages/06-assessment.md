---
layout: default
title: Self-assessment
permalink: assessment
---

{% assign competencies = site.elearning-competencies | sort: "category" %}
<script>var competencyGroups = [];</script>

<div class="row mt-5">
      <div class="col-12">
      <p>This data is not stored on our systems.</p>

<div class="assessmentSlider" id="assessmentSlider">
    <!-- Setup tabs
    <ul class="nav" id="Tabs" role="tablist">

    {% for c in competencies %}
        <li role="presentation">
        <a class="nav-link" id="{{ c.ID }}-tab" href="#{{ c.ID }}-pane" role="tab" aria-controls="{{ c.ID }}" aria-selected="true">{{ c.title }}</a>
      </li>
    {% endfor %}
</ul>
-->



    {% for c in competencies %}
      {% for item in c.items %}


        <div class="row">
        <script>competencyGroups.push(["{{ c.title }}","{{ c.ID }}_{{ item.ID }}",0]);</script>
          <div class="col-md-3">
            <h4>{{ c.title }}</h4>
            <p><strong>{{ item.name }}</strong></p>
            <label for="{{ item.ID }}">Unset</label>
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_0" name="{{ c.ID }}_{{ item.ID }}" value="0" checked="checked">
          </div>
          <div class="col-md-3">
            <h4>Level 1</h4>
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_1" name="{{ c.ID }}_{{ item.ID }}" value="1">
            <p>{{ item.L1 }}</p>
          </div>
          <div class="col-md-3">
            <h4>Level 2</h4>
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_2" name="{{ c.ID }}_{{ item.ID }}" value="2">
            <p>{{ item.L2 }}</p>
          </div>
          <div class="col-md-3">
            <h4>Level 3</h4>
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_3" name="{{ c.ID }}_{{ item.ID }}" value="3">
            <p>{{ item.L3 }}</p>
          </div>
        </div>

        {% endfor %}
    {% endfor %}


<!--<div class="text-center"><button type="submit" class="btn btn-primary">Produce assessment graph</button></div>-->
</div> <!-- end of slider -->
<!-- Button trigger modal -->
<div class="text-center">
<button id="start" type="submit" class="btn btn-secondary">Return to start</button>
<button id="previous" type="submit" class="btn btn-secondary">Previous</button>
<button id="next" type="submit" class="btn btn-secondary">Next</button>
<button id="showSummary" type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Show summary chart
</button>
</div>







</div> <!-- End of column -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <canvas id="radarChart"></canvas>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a type="button" id="downloadChart" class="btn btn-primary" download="competency-assessment">Download summary</a>
      </div>
    </div>
  </div>
</div>









</div><!-- end of row-->
<div class="text-center">
    <p>We can <a href="{{ site.baseurl }}/coaching">coach</a> you to the next level, or to improve where you have gaps.</p>
</div>
