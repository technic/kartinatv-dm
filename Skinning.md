# Инструкция по созданию своих скинов для плагина #

### Редактирование с помощью [e2skinner](http://code.google.com/p/e2skinner2/) ###
К сожалению e2skinner рассчитан на редактирование полного скина дримбокса, а не скина отдельного плагина. Поэтому прийдёться подготовить наш скин для e2skinner.

  * Сначала скачиваем [e2skinner](http://code.google.com/p/e2skinner2/downloads/list), распаковываем, так же берём <font color='blue'> skin-post </font> и <font color='blue'> skin-pre </font> [отсюда](http://code.google.com/p/kartinatv-dm/downloads/list).

  * Скачиваем с дримбокса папку /usr/share/enigma2/KartinaTV\_skin и кладём в папку skins в каталоге e2skinner2.0.6.3b (версия на момент написания wiki). В эту же папку кладём <font color='blue'> skin-post.exe </font> и <font color='blue'> skin-pre.exe </font>

  * открываем <font color='blue'> kartina_skin.xml </font> с помощью <font color='blue'> skin-pre.exe </font> (для этого можно просто перетащить файл <font color='blue'> kartina_skin.xml </font> на <font color='blue'> skin-pre.exe </font>). В каталоге создался файл <font color='blue'> skin.xml </font>

  * открываем программу e2skinner и начинаем редактировать скин. В этой программе удобно менять расположение элементов. Когда достигли нужного вида не забываем нажать кнопку сохранить.

  * теперь надо запустить утилиту <font color='blue'> skin-post.exe </font>. Точно так же нужно открыть <font color='blue'> skin.xml </font> в <font color='blue'> skin-post.exe </font>. Создастся обновлённый файл <font color='blue'> kartina_skin.xml </font>, который можно обратно кидать в дримбокс!

  * На всякий случай перед перезаписью <font color='blue'> skin.xml </font> и <font color='blue'> kartina_skin.xml </font> утилиты <font color='blue'> skin-pre.exe </font> и <font color='blue'> skin-post.exe </font> создают бэкапы <font color='blue'> skin.xml.backup </font> и <font color='blue'> kartina_skin.xml.backup </font>


_Названия элементов в разработке. Внимание возможны изменения!!!_

# Элементы инфобара #
|Name|Описание|Тип элемента|
|:---|:---------------|:----------------------|
|channelName|Имя просматриваемого канала|Label()|
|currentName|Краткое описание текущей передачи|Label()|
|nextName|Краткое описание следующей передачи|Label()|
|currentTime|Время начала текущей передачи в формате HH:MM|Label()|
|nextTime|Время начала следующей передачи в формате HH:MM|Label()|
|currentDuration|Время которое осталось до окончания текущей передачи в формате +%d min|Label()|
|nextDuration|Длительность следующей передачи в формате %d min|Label()|
|progressBar|Отображает отношение времени которое уже прошло ко всей длине передачи|Slider()|
|archiveDate|Дата передачи из архива в формате dd.mm|Label()|
| KartinaInArchive |Отображает включен режим архива или лайв режим|source Boolean()|
|playPause|пока не определено|? |


# Элементы списка каналов #

|Name|Описание|Тип элемента|
|:---|:---------------|:----------------------|
|channelName|Имя просматриваемого канала|Label()|
|epgName|Краткое описание текущей передачи|Label()|
|epgNextName|Кратикое описание следующей передачи|Label()|
|epgTime|Время начала и окончания текущей передачи в формате HH:MM - HH:MM|Label()|
|epgNextTime|Время начала и окончания следующей передачи в формате HH:MM - HH:MM|Label()|
|epgDescription|Подробное описание текущей передачи |Label()|
|epgNextDescription|Подробное описание следующей передачи|Label()|
|epgProgress|Отображает отношение времени которое уже прошло ко всей длине передачи|Slider()|



# Элементы ЕПГ меню #
|Name|Описание|Тип элемента|
|:---|:---------------|:----------------------|
|epgName|Краткое описание выбранной передачи|Label()|
|epgDescription|Подробное описание выбранной передачи|Label()|
|epgTime|Время начала и окончания выбранной передачи в формате HH:MM - HH:MM|Label()|
|sepgName|Для single режима. Краткое описание|Label()|
|sepgDescription|Для single режима. подробное онисание |Label()|
|sepgTime|Время начала и окончания выбранной передачи в формате HH:MM |Label()|