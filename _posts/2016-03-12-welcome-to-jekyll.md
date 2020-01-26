---
layout: post
title: "aaa to Jekyll!"
date: 2016-03-12
categories: jekyll update
thumb: sample.jpg
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve` , which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


There is a significant amount of subtle, yet precisely calibrated, styling to ensure
that your content is emphasized while still looking aesthetically pleasing.

All links are easy to [locate and discern](#), yet don't detract from the [harmony
of a paragraph](#). The _same_ goes for italics and __bold__ elements. Even the the strikeout
works if <del>for some reason you need to update your post</del>. For consistency's sake,
<ins>The same goes for insertions</ins>, of course.

### Code, with syntax highlighting

Here's an example of some ruby code with line anchors.

{% highlight ruby lineanchors %}
# The most awesome of classes
class Awesome < ActiveRecord::Base
  include EvenMoreAwesome

  validates_presence_of :something
  validates :email, email_format: true

  def initialize(email, name = nil)
    self.email = email
    self.name = name
    self.favorite_number = 12
    puts 'created awesomeness'
  end

  def email_format
    email =~ /\S+@\S+\.\S+/
  end
end
{% endhighlight %}

Here's some CSS:

{% highlight css %}
.foobar {
  /* Named colors rule */
  color: tomato;
}
{% endhighlight %}

Here's some JavaScript:

{% highlight js %}
var isPresent = require('is-present')

module.exports = function doStuff(things) {
  if (isPresent(things)) {
    doOtherStuff(things)
  }
}
{% endhighlight %}

Here's some HTML:

{% highlight html %}
<div class="m0 p0 bg-blue white">
  <h3 class="h1">Hello, world!</h3>
</div>
{% endhighlight %}

# Headings!

They're responsive, and well-proportioned (in `padding`, `line-height`, `margin`, and `font-size`).
They also heavily rely on the awesome utility, [BASSCSS](http://www.basscss.com/).

##### They draw the perfect amount of attention

This allows your content to have the proper informational and contextual hierarchy. Yay.

### There are lists, too

  * Apples
  * Oranges
  * Potatoes
  * Milk

  1. Mow the lawn
  2. Feed the dog
  3. Dance

### Images look great, too

![desk](https://cloud.githubusercontent.com/assets/1424573/3378137/abac6d7c-fbe6-11e3-8e09-55745b6a8176.png)

_![desk](https://cloud.githubusercontent.com/assets/1424573/3378137/abac6d7c-fbe6-11e3-8e09-55745b6a8176.png)_


### There are also pretty colors

Also the result of [BASSCSS](http://www.basscss.com/), you can <span class="bg-dark-gray white">highlight</span> certain components
of a <span class="red">post</span> <span class="mid-gray">with</span> <span class="green">CSS</span> <span class="orange">classes</span>.

I don't recommend using blue, though. It looks like a <span class="blue">link</span>.

### Footnotes!

Markdown footnotes are supported, and they look great! Simply put e.g. `[^1]` where you want the footnote to appear,[^1] and then add
the reference at the end of your markdown.

### Stylish blockquotes included

You can use the markdown quote syntax, `>` for simple quotes.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta mauris.

However, you need to inject html if you'd like a citation footer. I will be working on a way to
hopefully sidestep this inconvenience.

<blockquote>
  <p>
    Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  </p>
  <footer><cite title="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</cite></footer>
</blockquote>


### Tables

Tables represent tabular data and can be built using markdown syntax.  They are rendered responsively in Pixyll for a variety of screen widths.

Here's a simple example of a table:

| Quantity | Description |     Price |
|----------+-------------+----------:|
|        2 |      Orange |     $0.99 |
|        1 |   Pineapple |     $2.99 |
|        4 |      Banana |     $0.39 |
|==========|=============|===========|
|          |   **Total** | **$6.14** |

A table must have a body of one or more rows, but can optionally also have a header or footer.

The cells in a column, including the header row cell, can either be aligned:

- left,
- right or
- center.

Most inline text formatting is available in table cells, block-level formatting are not.

|----------------+----------------------+------------------------+----------------------------------|
| Default header | Left header          |     Center header      |                     Right header |
|----------------|:---------------------|:----------------------:|---------------------------------:|
| Default        | Left                 |        Center          |                            Right |
| *Italic*       | **Bold**             |   ***Bold italic***    |                      `monospace` |
| [link text](#) | ```code```           |     ~~Strikeout~~      |              <ins>Insertion<ins> |
| line<br/>break | "Smart quotes"       | <mark>highlight</mark> | <span class="green">green</span> |
| Footnote[^2]   | <sub>subscript</sub> | <sup>superscript</sup> |     <span class="red">red</span> |
|================+======================+========================+==================================+
| Footer row                                                                                        |
|----------------+----------------------+------------------------+----------------------------------|

### There's more being added all the time

Checkout the [Github repository](https://github.com/johnotander/pixyll) to request,
or add, features.

Happy writing.

---

[^1]: Important information that may distract from the main text can go in footnotes.

[^2]: Footnotes will work in tables since they're just links.



The following is an overview to copying and sharing Pixyll.[^1]

Most people have an understanding of what the copyright and licensing obligations are for source code, but not everyone has practical experience.  There is a lot of information about how to use free and open source source code generally, but not necessarily how it works specifically.

## Basics

Pixyll is free and open source software under the MIT license, a _permissive license_.  You can use Pixyll without charge and it is provided to you, "as is", without warranty of any kind.

These are some of the rights for Pixyll since it is under the MIT license:[^2]

1. You can **copy** Pixyll by forking it on GitHub or by any other means of copying.
2. You can **use** Pixyll to publish your site without restriction or limitation.
3. You can **change** Pixyll as you wish, and you can publish your site with a modified version of Pixyll.
4. You can also **distribute** copies of Pixyll to other people.
5. You can also **distribute modified** copies of Pixyll.

Other rights you have of Pixyll under the MIT license:

- You can **sell** copies of Pixyll, including copies you have modified.
- You can **combine** Pixyll with other works that are under the MIT license, or other permissive licenses, a copyleft license or a proprietary license.  Pixyll already does this itself by using Jekyll, Ruby and other dependencies.
- You can distribute copies of Pixyll to others under either the MIT license or you can **relicense** Pixyll under another license.  This includes a different permissive license, a copyleft license or a proprietary license.

Your only responsibility is to preserve both the copyright notices of Pixyll and the MIT license in your copy or modified work.

## How to

If you've modified Pixyll significantly and want to share your version, especially public copies of the code, then there are a few items you should do.

1. You should probably **rename** your fork of Pixyll with a different name.
2. A new name isn't required by the MIT license, but it is good etiquette.[^3]
3. You should add your name to the **copyright** of your version, and you should preserve the existing copyrights of Pixyll.
4. Maintaining the copyright notices isn't required of the MIT license, but it is suggested by the license and is a good practice for documenting the copyrights of your derived work.

The items above do not apply when you just copied and modified Pixyll in small ways to just publish your site and you have no plans to fork Pixyll under a different name.

If you want to publish a fork of Pixyll under a different name but keeping it under the MIT license, then you should add your name to the copyright notices:

    Copyright (c) 2019 Your Name
    Copyright (c) 2014-2019 John Otander for Pixyll

However, if you want to publish a fork of Pixyll under a different name *and* a different license, then you should should still add your name to the copyright notices but have a section titled "Pixyll" at the bottom of your LICENSE file that preserves the copyright and license notices for Pixyll:

    Pixyll
    
    Copyright (c) 2014-2019 John Otander
    
    MIT License
    
    Permission is hereby granted, [...]

If you are just modifying Pixyll in small ways to customize your site, you are not obligated to maintain the copyright notices of Pixyll on your site.  However, if you want to credit the Pixyll theme that would be appreciated, see section on "Pixyll Plug" in the README file that came with Pixyll.

Thanks for using Pixyll, and happy hacking!

---
[^1]: **Disclaimer**: This material is for informational purposes only, and should not be construed as legal advice or opinion.  For actual legal advice, you should consult with professional legal services.
[^2]: This list of privileges are derived from the four freedoms of "The Free Software Definition" published by the GNU project <https://www.gnu.org/philosophy/free-sw.en.html>.
[^3]: Using a different name from "Pixyll" for your derivate work helps avoid misdirected questions from people who are using your version.  It's similar to using version numbers to discrimate the revisions of software when troubleshooting issues.



<blockquote>
  <p>
    Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  </p>
  <footer><cite title="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</cite></footer>
</blockquote>
