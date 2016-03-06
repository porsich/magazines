# magazines





# email sender

curl -s --user 'api:key-81fcb0ed24cd6e707b401e45b68e2dc8' \
    https://api.mailgun.net/v3/sandbox079d5e25bb534919ae7fcb60b779ddc1.mailgun.org/messages \
    -F from='Mailgun Sandbox <postmaster@sandbox079d5e25bb534919ae7fcb60b779ddc1.mailgun.org>' \
    -F to='Pavel <p.orsich@gmail.com>' \
    -F subject='Hello Pavel' \
    -F text='Congratulations Pavel, you just sent an email with Mailgun!  You are truly awesome!' 

You can see a record of this email in your logs: https://mailgun.com/cp/log 

You can send up to 300 emails/day from this sandbox server. Next, you should add your own domain so you can send 10,000 emails/month for free.'


Credentials

IP Address
	209.61.151.224
SMTP Hostname
	smtp.mailgun.org
Default SMTP Login
	postmaster@sandbox079d5e25bb534919ae7fcb60b779ddc1.mailgun.org
Default Password
	6db711cf4bb4c84f115be020f1b0ed4c
API Base URL
	https://api.mailgun.net/v3/sandbox079d5e25bb534919ae7fcb60b779ddc1.mailgun.org
API Key
	key-81fcb0ed24cd6e707b401e45b68e2dc8


Now Follow These Steps To Verify Your Domain

1. Go To Your DNS Provider

Go to the DNS provider that you use to manage mg.198.211.115.157 and add the following DNS records.

Common providers include GoDaddy, NameCheap, Network Solutions, Rackspace Email & Apps, Rackspace Cloud DNS and Amazon Route 53.

2. Add DNS Records For Sending

TXT records (known as SPF & DKIM) are required to send email through Mailgun.

Type	Hostname	Enter This Value
TXT	mg.198.211.115.157	
v=spf1 include:mailgun.org ~all
TXT	smtp._domainkey.mg.198.211.115.157	
k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDOhyvL5OEZ3ixxKk6gwatsp71i9zE76Mj5iJZ9Co943cxPC6zhJFAGx2eudLxAfCpW7gNWYXtcBsc7NkNzbiZlMIzwWyH7g34alEpiLvTaVWaemzf5c1B2nuQb5G7bfyo1DtJQlsDFy5YlKBHaGxxEqghb1fsVvj25YnLqkEVcUwIDAQAB
3. Add DNS Records For Tracking

The CNAME record is necessary for tracking opens, clicks and unsubscribes.

Type	Hostname	Enter This Value
CNAME	email.mg.198.211.115.157	
mailgun.org
4. Add DNS Records For Receiving (Optional)

MX records are required to receive email. Unless you already have MX records for @mg.198.211.115.157 pointing to another email provider (e.g. Gmail), you should update the following records. More info on MX records .

Type	Priority	Enter This Value
MX	10	
mxa.mailgun.org
MX	10	
mxb.mailgun.org
5. Wait For Your Domain To Verify

Once you make the above DNS changes it can take 24-48hrs for those changes to propagate. We will email you to let you know once your domain is verified.