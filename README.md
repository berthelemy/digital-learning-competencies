# eLearning Competency Framework
A competency framework for and by the elearning industry.

It is designed to be human and machine readable.

## Using within your project

To incorporate the competencies into your project, you can add them as a git submodule:

`git submodule add https://github.com/Wyver-Solutions/_elearning-competencies _elearning-competencies`

The underscore is so they work directly as a [https://jekyllrb.com/docs/collections/](Jekyll collection). You will need to run the above command inside your Collections directory, and then use `git pull` inside the submodule whenever you want to update.

## Framework Structure

- Competency area
  - Sub-category
    - Level 1: Foundation
    - Level 2: Practioner
    - Level 3: Advanced

Each level contains text which describes what a person should be able to **do** who is working at that level in that area.

Descriptors use [Bloom's taxonomy of verbs](https://tips.uark.edu/using-blooms-taxonomy/)

## File Structure

Within the top section of the page you will find the data for the framework. It is stored between three dashes (---):

```
---
- title: The competency area
- ID: The ID code for the competency area
- description: The description of the competency area
- items: The list of sub-categories
  - ID: The ID code for the sub-category
  - name: The name of the sub-category
  - L1: The descriptor for level 1
  - L2: The descriptor for level 2
  - L3: The descriptor for level 3
---
```

## Note to developers

This set of files is designed primarily to work as a [Jekyll Collection](https://jekyllrb.com/docs/collections/), but can also be used in any system which can iterate over files and over the YAML data contained within them.

## Contributions

If you would like to contribute, please either:

1. Make comments within the [issues](https://github.com/Wyver-Solutions/_elearning-competencies/issues) section
2. Clone this git repository, make changes, and then submit a pull request

## Licensing

The competency framework uses a [Creative Commons licence](LICENSE.md).

If you would like to use the competency framework commercially, please contact mberthelemy@wvyersolutions.co.uk

## Github for non-developers

[Watch on Youtube](https://www.youtube.com/watch?v=9XhbYHcaT9k)

[![Github for non-developers](https://img.youtube.com/vi/9XhbYHcaT9k/0.jpg)](https://www.youtube.com/watch?v=9XhbYHcaT9k)
