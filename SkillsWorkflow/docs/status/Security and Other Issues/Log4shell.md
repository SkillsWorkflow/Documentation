---
id:  Log4shell
title: "Log4shell"
sidebar_label: 1. Log4shell
sidebar_position: 1
---

In this article, we clarify our clients about the newly found CVE-2021-44228 also known as "log4shell" and how it impacts (or not) SkillsWorkflow.

## Impact Summary

On the 9th of December, the digital world took notice of a new vulnerability called Log4shell.

This vulnerability is a library created in Open Source where any person can contribute to its development.

Being this an Open Source, the code is available for free and used by many people. 

More specifically on Java applications and Apache servers.

 

However, this vulnerability does not expose Skill Workflow, taking into account that we do not use Java in any of our services or use any Apache services. 

 

##Mitigation

We recommend all customers review their own code and services for any use of this component and upgrade or apply one of the mitigations to keep themselves secure.

 

1. If possible upgrade to log4j version 2.15

 

2. If you are using log4j version 2.10 or above, and cannot upgrade, then add the following property to the Java command line:

 

             -Dlog4j2.formatMsgNoLookups=true

 

Alternatively, you can set the following environment variable:

 

             LOG4J_FORMAT_MSG_NO_LOOKUPS=true

 

3. For all versions, but specifically for those below 2.10 remove the affected class from the classpath:

 

             zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class