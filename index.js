import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {undo, redo, history} from "prosemirror-history"
import { keymap } from "prosemirror-keymap";
import  {DOMParser } from "prosemirror-model";
import {baseKeymap} from "prosemirror-commands"

let editor = document.querySelector('#root');
let content = document.querySelector('#content');
let state = EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(content),
    plugins:[
        history(),
        keymap({'Mod-z': undo, 'Mod-y': redo}),
        keymap(baseKeymap)
    ]
})
let view = new EditorView(editor, {state})


// TODO:
// Make my own schema
// add more plugins (menu bar, etc)
// add style to editor