import { Component, OnInit } from '@angular/core';
import { Button } from '../../../components/button/button';
import { PProcedureCard } from '../../../components/card/card'

@Component({
    templateUrl: 'showcase/demo/p-procedure-card/p-procedure-card.html',
    directives: [Button, PProcedureCard]
})
export class PProcedureCardDemo { }