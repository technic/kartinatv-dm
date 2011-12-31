/**
 * @projectDescription JavaScript for printwikis.html
 * @link http://code.google.com/p/wikignpi
 * @author Bruno Santos
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * Usage:
 *   Shown here: http://code.google.com/p/wikignpi/wiki/PrintThoseWikis
 */
_gnpi_counter=-1;_gnpi_showIndex=true;_gnpi_subversion="hg";_gnpi_disableWarnings=true;_gnpi_baseurl="";_gnpi_openURLSInNewWindow=true;_gnpi_wikilist="";_gnpi_wikilist_orig=new Array();_gnpi_showLabels=true;_gnpi_showSummary=true;_gnpi_showFileName=false;_gnpi_useSeparator=true;_gnpi_autoprint=true;_gnpi_hideComments=true;_gnpi_showGadgets=true;_gnpi_showVideos=false;_gnpi_language="";_gnpi_showLanguages=false;_gnpi_waitmessage="Collecting data, please wait...";_gnpi_indexTitle="Table of Contents";_gnpi_languagesAvailable="";_appendText=function(text2append){var d=document.createElement("div");d.innerHTML=text2append;document.body.appendChild(d);};_getNappendAnchorNIndex=function(data,anchorName){var title='';var values=/^\s*#summary\s+(.*)/i.exec(data);if(values.length>1){if(_gnpi_showFileName){title=anchorName;}else{title=values[1];}_appendText('<h1><a name="'+anchorName+'"></a>'+title+'</h1>');var ul=$('.IndexList');if(ul.length>0){ul=ul[0];var li=document.createElement("li");li.innerHTML='<a href="#'+anchorName+'">'+title+'</a>';ul.appendChild(li);}}};_postwiki=function(data){var g=new GoogleCodeWikiParser(_gnpi_showSummary,_gnpi_showLabels);g.options.disableWarnings=_gnpi_disableWarnings;g.options.wikiBaseURL=_gnpi_baseurl;g.options.openURLSInNewWindow=_gnpi_openURLSInNewWindow;g.options.wikilist=_gnpi_wikilist_orig;g.options.hideComments=_gnpi_hideComments;g.options.showGadgets=_gnpi_showGadgets;g.options.showVideos=_gnpi_showVideos;var html=g.parse(data);_getNappendAnchorNIndex(data,_gnpi_wikilist_orig[_gnpi_counter]);_appendText(html+(_gnpi_useSeparator?'<br><br><hr><br>':'<br><br>'));_nextHash();};_failed=function(){alert('It wasn\'t possible to compile the list of wiki pages.');};_nextHash=function(){if(_gnpi_wikilist.length>0){if(_gnpi_subversion.indexOf("hg")>=0){var url="http://"+document.location.hostname+"/hg/";}else{var url="http://"+document.location.hostname+"/svn/wiki/";}if(_gnpi_language.length>0&&useThatLanguage()){url+=_gnpi_language+"/";}url+=_gnpi_wikilist.shift()+".wiki";_gnpi_counter++;$.ajax({url:url,success:_postwiki,error:_failed});}else{var p=$('.processing_data_please_hold');if(p.length>0){p=p[0];p.parentNode.removeChild(p);if(document.location.hash.length>1){document.location.hash=document.location.hash+"_";document.location.hash=document.location.hash.substr(0,document.location.hash.length-1);}if(_gnpi_autoprint)window.print();}}};_failedLangs=function(){alert('It wasn\'t possible to get the list of languages available. Check if you have the "languages.lst" file on your wiki.');};_armLanguages=function(data){_gnpi_languagesAvailable=data;var languagesLine=generateLangsHTMLLine();if(languagesLine.length>0)_appendText(languagesLine);_nextHash();};getLanguages=function(){if(_gnpi_subversion.indexOf("hg")>=0){var url="http://"+document.location.hostname+"/hg/languages.lst";}else{var url="http://"+document.location.hostname+"/svn/wiki/languages.lst";}_gnpi_counter++;$.ajax({url:url,success:_armLanguages,error:_failedLangs});};function generateLangsHTMLLine(){var htmlLine='',defaultLang=_gnpi_language;if(_gnpi_showLanguages&&_gnpi_languagesAvailable.length>0){var languagesAvailable=_gnpi_languagesAvailable.split(',');var j,languageLinks=generateLanguageLinks(languagesAvailable);if(defaultLang.length==0){defaultLang=languagesAvailable[0];}for(j in languagesAvailable){if(htmlLine.length>0)htmlLine+=', ';if(languagesAvailable[j]==defaultLang){htmlLine+='<b>'+defaultLang+'</b>';}else{htmlLine+='<a title="'+languagesAvailable[j]+'" href="'+languageLinks[j]+'">'+languagesAvailable[j]+'</a>';}}}return htmlLine;};function generateLanguageLinks(langs){var j,langLinks=new Array(langs.length);var originalURL=window.location.href;var hashPos=originalURL.indexOf('#'),questionPos=originalURL.indexOf('?');var hashText='';if(hashPos>0){hashText=originalURL.substr(hashPos+1);originalURL=originalURL.substr(0,hashPos);}if(originalURL.indexOf('_gnpi_language=')<0){originalURL+='_gnpi_language=';}var rxlang=/(_gnpi_language=%22)([a-zA-Z]+)(%22)/;var ma=rxlang.exec(originalURL);var toRep='';if(ma[3]==undefined)ma[3]='';for(j in langs){toRep=ma[1]+langs[j]+ma[3];langLinks[j]=originalURL.replace(ma[0],toRep);if(hashText.length>0)langLinks[j]+='#'+hashText;}return langLinks;};function useThatLanguage(){var unlistedLangs=_gnpi_languagesAvailable.length==0,noLanguageSpecified=_gnpi_language.length==0;var canUse=unlistedLangs&&!noLanguageSpecified;if(noLanguageSpecified){canUse=false;}else if(!unlistedLangs&&_gnpi_languagesAvailable.indexOf(_gnpi_language)<=0){canUse=false;}else if(!unlistedLangs){canUse=true;}return canUse;};checkForOptions=function(){if(document.location.href.indexOf('?')>0){var originalURL=unescape(document.location.href);var sl=originalURL.length;sl=document.location.hash.length>1?originalURL.indexOf('#'):sl;var opstr=originalURL.substr(0,sl);sl=originalURL.indexOf('?');opstr=opstr.substr(sl+1);var opts=opstr.split('&');for(var j=0;j<opts.length;j++){if(opts[j].length>0){eval(unescape(opts[j])+'');}}}};stripIndex=function(){var imd=$('.IndexMasterDiv');if(imd.length>0){imd[0].parentNode.removeChild(imd[0]);}};function changeIndexTitle(){var imh=$('.IndexMasterH1');if(imh.length>0){imh[0].innerHTML=unescape(_gnpi_indexTitle);}};setWaitingMessage=function(){var p=$('.processing_data_please_hold');if(p.length>0){p=p[0];p.innerHTML=unescape(_gnpi_waitmessage);}};var p4datahold=$('.processing_data_please_hold');if(p4datahold.length>0){checkForOptions();_gnpi_wikilist=_gnpi_wikilist.split('|');_gnpi_wikilist_orig=_gnpi_wikilist.slice(0);setWaitingMessage();if(!_gnpi_showIndex){stripIndex();}else{changeIndexTitle();}if(_gnpi_showLanguages){getLanguages();}else{_nextHash();}}