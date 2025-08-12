---
id: 2023-04-05-RCA-Mitigated-Blocked-Documents-West-Europe
title: RCA - Mitigated - Blocked Documents - West Europe - 05-04-2023
sidebar_label: RCA - Mitigated - Blocked Documents - West Europe - 05-04-2023
---

### Impact summary

On April 5, 2023, some customers reported erroneous behavior when accessing documents from our application in our West Europe region.
In some documents over which the end user had permissions to read and save, the document would appear blocked without the possibility of unblocking it.

The development team investigated this scenario and reported that this was due to a failure or timeout when changing document status in a bulk action.
During this operation, documents are blocked because they should not be changed by any other user before the operation finishes. This will preserve document integrity.

### RCA

After further investigation into the problem, it was found that during the bulk operation, documents are unblocked as the operation proceeds. 
If it does not succeed entirely due to an error, documents that have not been processed yet will remain blocked.
Due to a tight unblock policy, only the user who blocked the document can unblock it after a certain amount of time.

### Next steps

Our customers rely on Skills Workflow and we understand the impact these incidents have, and that's why we are committed to continuously improving our platform.

We believe it is important to maintain a block policy over documents that are being changed by a user.
This prevents other users from changing the same document at the same time, which could lead to data loss or inconsistency.

There is already a ticket created to fix the behavior stated for documents that are not unblocked during a bulk operation or any other routine.
The unblock policy will be redefined: even if a document is blocked due to an unexpected behavior or error, it should be unblocked by default after a small period of time and by any user.