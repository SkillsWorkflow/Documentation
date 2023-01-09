---
id: cyber-faq
title: Cyber Security FAQ
sidebar_label: Cyber Security FAQ
sidebar_position: 12
---

## Here are the most frequently asked questions regarding our Cyber Security Policies

<table className="custom-table">
    <thead> 
        <tr>
            <th>Question</th>
            <th>Answer</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td>Do you have 3rd Party attestation certificates like ISO 27001 and SOC2 certifications of cloud service provider (Single selection allowed)?</td>
            <td>Yes - We have third party security certificates</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td>Is Client data used in development and testing environments?</td>
            <td>No</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are development, test and production environments separated from operational IT environments to protect applications from inadvertent changes or disruption?  (Single selection allowed)</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Is  Client data stored in a physically or logically separate format from other clients' data to ensure that data can be identified at all times and will not be implicated when other clients' data is accessed?</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Is data at rest encrypted?</td>
            <td>Yes</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td>What encryption technology is used to encrypt Client data at rest? on the server, back-up media, laptops, flash drives and mobile devices?</td>
            <td>We use Microsoft Azure uses and their encryption method is TDE.</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td> Is data in Transit encrypted? </td>
            <td>Yes</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td>For data in transit, what is the encryption used, example: HTTPS, SFTP, TLS 1.2, etc.</td>
            <td>The encryption used is TTPS, TLS 1.3</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td>Do we carry out security threat modelling, secure coding practice, security architecture review and penetration testing of products/services provided?</td>
            <td>Yes, we have static code analysis and also yearly pentesting</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Do Subcontractors (e.g., backup vendors, service providers, equipment support maintenance, software maintenance vendors, data recovery vendors, hosting providers, etc.) have access to scoped systems and data or processing facilities?</td>
            <td>We do not have servers or services on Prem, Backups and facilities are managed by Microsoft.</td>
            <td></td>
        </tr>
            <tr className="selected">
            <td>Is there an asset management program approved by management, communicated to constituents and an owner to maintain and review? </td>
            <td>Yes, we have a asset management policy and procedure regarding machines used by employees.</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Is Information classified according to legal or regulatory requirements, business value, and sensitivity to unauthorized disclosure or modification? </td>
            <td>From the Client perspective all the data inserted on the applications is responsibility of the client. Internal documentents are classified and store with security measures based on tier classification</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are Human Resource policies approved by management, communicated to Constituents and an owner to maintain and review?</td>
            <td>All resources at Skills Workflow are approved by several responsible people, from HR, Department, to board.</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Do Human Resource policies include Constituent background screening criteria?</td>
            <td>The HR department has in their hiring process a screening phase.</td>
            <td></td>
        </tr>
          <tr className="selected">
            <td>Are Constituents required to attend security awareness training? (Single selection allowed) (Justification allowed)</td>
            <td>Yes. Upon entry all employees must do a cybersecurity course and througout the year they have worshops in order to update knowledge.</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are there physical security controls for all secured facilities e.g., data centers, office buildings? (Single selection allowed) (Justification allowed)</td>
            <td>Skillsworkflow only has na office for collaboration, regarding critical assets all are stored and managed on cloud.</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are there physical access controls that include restricted access and logs kept of all access? (Single selection allowed) (Justification allowed)</td>
            <td>In order to enter into the building every person must pass physical security guard and in ordr to enter into the office they must have their biometrics in the loging system.</td>
            <td></td>
        </tr>
          <tr className="selected">
            <td>Do changes to the production environment including network, systems, application updates, and code changes subject to the change control process? (Single selection allowed) (Justification allowed)</td>
            <td>Yes, however, the changes to production only include Skills Workflow's code base and all configurations are made by the client.Every new feature must be turned on by the client, by default every new feature is turned off. Any other changes (e.g., O.S., upgrades) are managed by Microsoft Azure.</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Is there a password policy for systems that transmit, process or store data that has been approved by management, communicated to constituents, and enforced on all platforms and network devices? If no, please explain in the Additional Information field. (Single selection allowed) (Justification allowed)</td>
            <td>Yes , SkillsWorkflow has a Password policy that enforces in every system used internally</td>
            <td></td>
        </tr>
       <tr className="selected">
            <td>Does the password policy define specific length and complexity requirements for passwords? (Single selection allowed) (Justification allowed)</td>
            <td>Yes, this is defined in the Password Policy</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td>Does the password policy define requirements for provisioning and resetting passwords? (Single selection allowed) (Justification allowed)</td>
            <td>Yes, this is defined in the Password Policy</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td> Are user access rights reviewed periodically? (Single selection allowed)</td>
            <td>Yes, this is defined in the Password Policy</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Is there a formal Software Development Life Cycle (SDLC) process? (Single selection allowed)</td>
            <td>Yes, Skillsworkflow has a SDLC process implemented</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are applications evaluated from a security perspective prior to promotion to production? (Single selection allowed)</td>
            <td>Yes, this is a part of the SDLC Process</td>
            <td></td>
        </tr>
          <tr className="selected">
            <td> Is a Secure Code Review performed regularly? (Single selection allowed)</td>
            <td>Yes, Skillworkflow does static code analysis and yearly pentesting</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td>Are identified security vulnerabilities remediated prior to promotion to production? (Single selection allowed)</td>
            <td>In case of finding any critical or high vulnerabilities the promotion to production is aborted.</td>
            <td></td>
        </tr>     
    </tbody>
</table> 