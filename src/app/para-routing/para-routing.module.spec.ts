import { ParaRoutingModule } from './para-routing.module';

describe('ParaRoutingModule', () => {
  let paraRoutingModule: ParaRoutingModule;

  beforeEach(() => {
    paraRoutingModule = new ParaRoutingModule();
  });

  it('should create an instance', () => {
    expect(paraRoutingModule).toBeTruthy();
  });
});
