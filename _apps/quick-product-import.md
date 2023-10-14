---
title: 'Quick Product Import'
description: A Shopify app for bulk import of an inventory of products.
date: '2023-01-01'
modified_date: '2023-01-01'
image: /assets/images/posts/random-img.jpg
---

Quick Product Import was a public and embedded Shopify application for helping merchants upload and maintain their Shopify inventories.

![Quick Product Import Overview](@@baseUrl@@/assets/images/qpi.gif)

Featuring a host of options for customizing the upload workflow, gaining insight into the Shopify inventory protocol with helpful error handling, and a "pay-as-you-go" pricing model, we believe that Quick Product Import filled a void in the Shopify inventory management space.

The application interfaced extensively with Shopify's Admin GraphQL API. Due to rate limitations and other requirements set forth while using that API, several key challenges were overcome in terms of providing this service at scale.

Some of those challenges included:

- Shaping the imported .csv data to exactly match the schema expected by Shopify's GraphQL API.

- Creating a queue system that would prevent our Node.js server from taking on too great a workload at any given time.

## Key Technologies
React, Polaris (UI Library), Node.js, Express, Socket.io, MongoDB
