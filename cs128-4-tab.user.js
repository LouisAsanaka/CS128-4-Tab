// ==UserScript==
// @name         CS128-4-Tab
// @namespace    https://github.com/LouisAsanaka/CS128-4-Tab
// @version      1.0.0
// @description  Size 4 tab >>> 2
// @author       Louis
// @match        https://cs128.org/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
  
  	const scriptContents = `
				function changeOptions() {
						let i = 0;
            for (let editorListName of Object.keys(window).filter(name => name.startsWith("editors_"))) {
                for (let editor of window[editorListName]) {
                    editor.editor.session.setOptions({ tabSize: 4 });
										++i;
                }
            }
            console.log("Set tab settings for " + i + " editor tabs.");
				}

				let previousUrl = "";
        setInterval(function(){
            if (window.location.href !== previousUrl) {
                changeOptions();
                previousUrl = window.location.href;
            }
        }, 100);
		`
    function inject() {
     		let elem = document.createElement('script');
      	elem.id = "dascript";
        elem.innerHTML = scriptContents;
      	document.body.appendChild(elem);
    }
    inject();
})();
