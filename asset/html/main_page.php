<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>OPEX</title>
  <link rel="stylesheet" href="../css/main_page.css">
  <link rel="stylesheet" href="../css/var.css">

  <script src="../js/main_page.js"></script>
 </head>
 <body>
    <div class="left_panel" id="left_panel">
        
        <img src="../img/main_page/mars_logo.jpg" alt="" class="mars_logo" onclick="sleep_left_panel()">

        <a href=""><div class="block"> <div><img src="../img/main_page/track_buy.png" alt="" class="logo_left_panel"></div> <div class="left_panel_text" id="track_buy_id_elem">Трекер закупок</div></div></a>
        <a href=""><div class="block"> <div><img src="../img/main_page/hranenie.png" alt="" class="logo_left_panel"></div> <div class="left_panel_text" id="work_sklad">Работа со складом</div></div></a>

        <a href=""><div class="block"> <div><img src="../img/main_page/book.png" alt="" class="logo_left_panel"></div> <div class="left_panel_text" id="bibl">Справочники</div></div></a>
        <a href=""><div class="block"> <div><img src="../img/main_page/otch.png" alt="" class="logo_left_panel"></div> <div class="left_panel_text" id="otch">Отчеты</div></div></a>
    </div>

    <div class="work_zone">

        <div class="name">
            <img src="../img/main_page/treck_buy_name.png" alt="" class="">
        </div>

        <div class="panel_top_setting">
            <!-- ______________________________________________________________________________________________________ -->
            <div class="setting">
            
                <div class="column">

                    <div>Дата заказа:</div>
                    <div class="column_right"><input type="date" class="input"></div>

                </div>

                <div class="column">

                    <div>Закупщик:</div>
                    <div class="column_right"><input type="text" class="input"></div>
                
                </div>

                <div class="column">
                
                    <div>Номер заказа:</div>
                    <div class="column_right"><input type="text" class="input"></div>
                    
                </div>

            </div>

            <!-- ______________________________________________________________________________________________________ -->

            <div class="setting">

                <div class="column">

                    <div>Номер СФ\Дата СФ:</div>
                    <div class="column_right"><input type="text" class="input"></div>

                </div>

                <div class="column">

                    <div>Передано в оплату:</div>
                    <div class="column_right"><input type="text" class="input"></div>

                </div>

                <div class="column">

                    <div>Поставщик:</div>
                    <div class="column_right"><input type="text" class="input"></div>

                </div>

            </div>

            <!-- ______________________________________________________________________________________________________ -->

            <div class="setting">

                <div class="column">
                <div>Срок поставки:</div>
                <div class="column_right"><input type="date" class="input"></div>
                </div>
                <div class="column">
                <div>ЮР. лицо:</div>
                <div class="column_right"><input type="text" class="input"></div>
                </div>

            </div>

            <!-- ______________________________________________________________________________________________________ -->

            <div class="setting">

                <button class="button_sub">Запросить цену</button>
                <button class="button_sub">Разместить заказ</button>
                <button class="button_sub">Удалить заказ</button>

            </div>

        </div>

        <div class="panel_cen_funct">

            <div class="blok_cen_funct_nested">Строки заказа</div>
                <div class="blok_cen_funct_nested">

                <img src="../img/main_page/add.png" alt="" class="panel_cen_funct_logo">
                <a href=""> Добавить</a>
            
                </div>

            <div class="blok_cen_funct_nested"><a href=""><img src="../img/main_page/new_add.png" alt="" class="panel_cen_funct_logo">Добавить копированием</a></div>
            <div class="blok_cen_funct_nested"><a href=""><img src="../img/main_page/delete.png" alt="" class="panel_cen_funct_logo">Удалить</a></div>

        </div>

        <div class="panel_table">

            <table cellspacing="1">

            <tr>

                <th>№</th>
                <th>/</th>
                <th>Иницыатор заказа</th>
                <th>Заявка SN</th>
                <th>Номер CC/PO</th>
                <th>Номер квоты</th>
                <th>Номенклатура</th>
                <th>Цена</th>
                <th>Количество, шт</th>
                <th>Сумма</th>
                <th>Склад</th>
                <th>Статус заказа</th>
                <th>Название заказа</th>
                <th>Отметить заказ в необнуляемых остатках</th>
                <th>Отправить уведомление инициатору</th>
                <th>Отправить уведомление кладовщику</th>

            </tr>

            <tr class="panel_table_text">

                <td id="namber">1</td>
                <td id="check_box">

                    <input type="checkbox" class="checkbox">

                </td>

                <td></td>
                <td></td>
                <td>тест</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td id="check_box_buy">

                    <input type="checkbox" class="checkbox">

                </td>

                <td id="check_box_notifications">

                    <input type="checkbox" class="checkbox">

                </td>

                <td id="check_box_notifications_storekeeper">

                    <input type="checkbox" class="checkbox">

                </td>

            </tr>

            </table>


        </div>

    </div>



</body>
</html>