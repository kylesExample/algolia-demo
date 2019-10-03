### Question 1:
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George


### Answer 1:

Hello George,

Allow me to provide some high level descriptions of the concepts you’ve enquired about.

First off, records are simply the data sets that are to be made searchable. In the context of Algolia, it is the data customers intend make use of within the Algolia ecosystem. For a retailer, it would be a list of products, along with all relevant details. Records should include all information that you would desire to use as an attribute that you would like a user of your site to be able to search by. So a product description in addition to it’s brand name would be valuable, such as in a case where a customer would be looking for a “hand-held” item. Irrelevant data should be omitted for the sake of general efficiency	

Indexing is an essential step in making records searchable. Records can be manually indexed in the Algolia dashboard, but as data changes over time, this process can be automated and fed to Algolia through an API.

Custom Ranking refers to specific data points that are of the most relevance when deciding what search results to display and in what order. Since the nature of data and business needs can vary so greatly, Algolia allows users to set the rank attributes by their importance.

I hope you find these explanations	 useful. Let me know if you need further insight on anything else.

Regards,
Kyle






### Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt


### Answer 2:

Hello Matt,

No need to apologize. I’m sorry to hear that you are finding the new dashboard to be painful. As Algolia adds and improves features, our dashboard has to balance ease of use with providing robust functionality.

Have you explored using the Algolia API to create/update/delete indexes? We have extensive documentation, complete with code examples that you or a developer could review. If you are at a point where you need to iterate with frequency, using the API might be the best route regardless of the dashboards word flow.

Regards,
Kyle



### Question 3:

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

### Answer 3:

Hi Leo,

While it is partially dependent on the nature of your site and the data you wish to make searchable, Algolia has a very low set up time to implement its most powerful features. 

Assuming you have records available, even a small sampleset, you can create your first index with Algolia. Records can be uploaded to Algolia as either JSON or a CSV, and they should include all data points that are relevant to searchability  and display results. You can create an index by uploading your records in the dashboard. From there, you would need to configure the index by setting searchable attributes. You can fine tune the index settings later on in order to best meet your business objectives. Those previous steps can be performed by way of API, but for getting started I think the dashboard would make the most sense.

Once your index is set up and configured, the next step is implementation in a UI. You can take advantage of the InstantSearch UI library that best matches your front end. The library provides widgets for a broad set of use cases, and they only require minimal set up. Just like set up and configuration, there search APIs you can be used in order to create and entirely custom build if the need arises. From there you can integrate the UI into your app or site as you see fit.

I hope you found this useful, let me know if you have more questions.

Regards,
Kyle
