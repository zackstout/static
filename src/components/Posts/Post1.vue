<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Combing through Data with Python</h2>
      </div>
      <div class="blogSubtitle">Apr. 8, 2018</div>
    </div>

    <div class="blogText">
      In this post I want to describe how to use the Python library <span class="codeBit">Pandas</span> to explore a
      data-set. I also want to explain how to use <span class="codeBit">urllib</span> to ping an API.

      <!--
      Talk about dot notation vs brackets, initializing a dictionary
       -->
    </div>

    <div class="blogText">
      In other words, this post is about how to use Python to interact with existing sets of data -- directly, via CSVs,
      or indirectly, via an API. In a future post I'll walk through my experience with using Python to scrape the web to
      generate an original data-set.
    </div>

    <div class="blogText">
      Here's the idea: we'll grab the Bechdel Test data-set from
      <a href="https://github.com/fivethirtyeight/data">fivethirtyeight</a>, and then we'll ping the
      <a href="https://omdbapi.com">OMDB API</a> for information about each movie's ratings. (A movie passes the Bechdel
      test if it depicts two female characters discussing something other than a man.)
    </div>

    <div class="blogText">
      To get started, we'll need to grab our data. One source of easily-accessible data is FiveThirtyEight; the Bechdel
      data can be found <a href="https://github.com/fivethirtyeight/data/tree/master/bechdel">here</a>.
    </div>

    <div class="blogText">
      Our data comes in the form of a CSV. Once we've moved the CSV into our project, Pandas makes it simple to read our
      data:
    </div>

    <pre><code>    import pandas as pd
      import matplotlib.pyplot as plt
      df = pd.read_csv('movies.csv')
      print(df.head())</code></pre>

    <div class="blogText">
      This will print out the first five rows of data. Pandas also supplies some awesome ways to preview our data (note
      that we should only call <span class="codeBit">plt.show</span> once):
    </div>

    <pre><code>    from pandas.plotting import scatter_matrix
      # Box/whisker
      df.plot(kind='box', subplots=True, layout=(3, 3),
        sharex=False, sharey=False)
      plt.show()

      # Histograms
      df.hist()
      plt.show()

      # Scatter plot matrix:
      scatter_matrix(df)
      plt.show()</code></pre>

    <div class="blogText">Here are the histograms for a different dataset:</div>

    <div>
      <img style="margin-left: 5%" width="90%" src="@/assets/histograms.png" alt="" />
    </div>

    <div class="blogText">
      Now we can glean what we care about: each movie's IMDB identification string (which we'll use to ping the OMDB
      API), and whether or not it passes the Bechdel test. We can store this information in a list of objects, or
      <i>dictionaries</i>.
    </div>

    <pre><code>    imdb_ids = []
      for index, row in df.iterrows():
          info = dict()
          info["id_no"] = row["imdb"]
          info["result"] = row["binary"]
          imdb_ids.append(info)</code></pre>

    <div class="blogText">
      Next, we'll want to grab each movie's ratings from the OMDB API. There are three sources of ratings (IMDB, Rotten
      Tomatoes and Metacritic), and we'll need to keep track of where each rating came from, so it will be useful to
      initialize six arrays (<span class="codeBit">imdb_passes</span>, <span class="codeBit">imdb_fails</span>, etc.).
    </div>

    <pre><code>    import urllib.request, urllib.error
      import json

      for movie in imdb_ids:
          link = "http://www.omdbapi.com/?apikey=your_key_here&i=%s"
            % movie["imdb_id"]
          data = json.load(urllib.request.urlopen(link))

          # Loop through the array of ratings:
          for rating in data["Ratings"]:
              if (rating["Source"] == "Rotten Tomatoes"
                and movie["result"] == "PASS"):
                  val = rating["Value"]
                  # Strip extraneous characters:
                  val = float(val[:find("%")])
                  rt_passes.append(val)
              elif ...
            </code></pre>

    <div class="blogText">
      Finally, we need to calculate the average rating from each of our six lists. Python makes this easy:
    </div>

    <pre><code>    rt_pass_avg = sum(rt_passes)/float(len(rt_passes))
      ...
    </code></pre>

    <div class="blogText">Here are the results we get:</div>

    <table class="blogText" style="text-align: center">
      <thead>
        <th>Source</th>
        <th>Pass Rating</th>
        <th>Fail Rating</th>
      </thead>
      <tr>
        <td>Rotten Tomatoes</td>
        <td>60.4%</td>
        <td>62.5%</td>
      </tr>
      <tr>
        <td>IMDB</td>
        <td>6.62/10</td>
        <td>6.86/10</td>
      </tr>
      <tr>
        <td>Metacritic</td>
        <td>58.8%</td>
        <td>69.5%</td>
      </tr>
    </table>

    <div class="blogText">
      There you have it. Movies that fail the Bechdel test tend to be rated more highly than movies that pass. I'll
      leave the question of what explains this phenomenon for another time. The point for now is that we can take a
      data-set, do some analysis on it, and extract a story or a pattern from it.
    </div>

    <div class="blogText">
      Next steps involve the other dimensions of our data set -- we have budgets, years, and reasons for failing the
      test. The possibilities abound!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post1 extends Vue {}
</script>
