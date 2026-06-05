-- Q1

select count(distinct t1.transaction_id) as payment_count
from transactions t1
join transactions t2
on t1.merchant_id=t2.merchant_id
and t1.credit_card_id=t2.credit_card_id
and t1.amount=t2.amount
and t2.transaction_timestamp<t1.transaction_timestamp
and extract(epoch from(t1.transaction_timestamp - t2.transaction_timestamp))<=600


-- Q2

select 7 as month, count(distinct u1.user_id) as monthly_active_users
from user_actions u1 join user_actions u2 on u1.user_id=u2.user_id
where substring(u1.event_date::text,1,4)='2022' and substring(u1.event_date::text,6,2)='06'
and substring(u2.event_date::text,1,4)='2022' and substring(u2.event_date::text,6,2)='07'


-- Q3

select p.sub_id as post_id, count(distinct s.sub_id) as number_of_comments from
(select distinct sub_id from submissions where parent_id is null) p
left join submissions s on s.parent_id=p.sub_id
group by p.sub_id order by p.sub_id