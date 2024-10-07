<?php

$db = new mysqli("localhost", "root", "product_name");

if ($db->connect_errno){
    die;
}

$db ->query("INSERT into `product_name`
(`name`, `image`, `title`, `price`, `seller_id`, `description` `id`) VALUES
('tola','tola.png','perfume',$1200,1,'Perfume',1)")

?> 