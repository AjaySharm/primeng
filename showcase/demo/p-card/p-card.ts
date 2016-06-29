import { Component, OnInit } from '@angular/core';
import { Button } from '../../../components/button/button';
import { PCard } from '../../../components/card/card'

@Component({
    templateUrl: 'showcase/demo/p-card/p-card.html',
    directives: [Button, PCard]
})
export class PCardDemo { }