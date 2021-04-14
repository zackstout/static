<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Writing SQL Queries</h2>
      </div>
      <div class="blogSubtitle">Dec. 15, 2017</div>
    </div>

    <div class="blogText">
      Writing queries to your SQL database is a lot of fun, and pretty intuitive once you get used to the syntax. (We'll
      use PostgreSQL syntax here.)
    </div>

    <div class="blogText">
      To my mind, the bread and butter of a relational database query is the <span class="codeBit">JOIN</span> keyword.
      Suppose we have one table to keep track of humanitarian projects and another table, keyed to the first table, to
      keep track of each project's monthly carbon footprint. (Incidentally, this is the group project I'm working on at
      Prime.) To get all of the footprints associated with a single project, we could write
    </div>

    <pre><code>    SELECT * FROM "projects" JOIN "footprints"
          ON "projects"."id" = "footprints"."project_id"
          WHERE "projects"."id" = 1;</code></pre>

    <div class="blogText">
      The <span class="codeBit">ON</span> clause ensures that we grab all of the footprints that have a project_id value
      equal to the id of the project we are interested in. A potential problem with this is that we might have
      identically-named columns in different tables (e.g. "id"). To remedy this, we can replace
      <span class="codeBit">*</span> in our <span class="codeBit">SELECT</span> clause with
      <span class="codeBit"
        >"footprints"."id" as footprint_id, "projects"."id" as project_id, "living_total", "shipping_total",
        "travel_total"</span
      >.
    </div>

    <div class="blogText">
      Our footprints table might have many rows; suppose we want to sum up the values in each column across all rows. We
      could write
    </div>

    <pre><code>    SELECT SUM("living_total") as living_total,
          SUM("travel_total") as travel_total,
          SUM("shipping_total") as shipping_total
          FROM "footprints";</code></pre>

    <div class="blogText">
      If we want to sum the values across columns, we can write
      <span class="codeBit">SUM("travel_total" + "shipping_total" + "living_total") as "total_footprint"</span>.
    </div>

    <div class="blogText">
      Suppose that instead of summing all the rows, we wanted to group them into clusters, for instance by footprint
      Type. We can pair the <span class="codeBit">SUM</span> keyword with <span class="codeBit">PARTITION BY</span> to
      accomplish that: <span class="codeBit">SELECT SUM("living_total") OVER (PARTITION BY "type")</span>.
    </div>

    <div class="blogText">
      Suppose we have three other tables, Shipping, Living and Travel, each keyed to our Footprints table. In order to
      post a new footprint to the database, we need to update each table. In our query from the server, we would first
      post to the Footprints table, adding <span class="codeBit">RETURNING "id"</span> to our
      <span class="codeBit">INSERT INTO</span> query. Then we can pass the returned id along to the next query, which
      posts to our three subtables with the proper foreign key.
    </div>

    <div class="blogText">
      Finally, suppose we want to get, for each project, an array of all the footprint totals associated with it. The
      query would look something like this:
    </div>

    <pre><code>    SELECT "projects"."name" as name,
          array_agg("footprint_total") as total
          FROM "projects" JOIN "footprints"
          ON "projects"."id" = "footprints"."project_id"
          GROUP BY "projects"."name";</code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post2 extends Vue {}
</script>
